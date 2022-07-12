import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apiService } from '../../sesrvice';

const initialState = {
	courses: [],
};

export const fetchAllCourses = createAsyncThunk(
	'courses/fetchAllCourses',
	async () => {
		const response = await apiService.getAllCourses('courses/all');
		const result = await response.json();
		return result.result;
	}
);

export const fetchAddCourse = createAsyncThunk(
	'/courses/fetchAddCourse',
	async (body) => {
		const response = await apiService.addNewCourse('courses/add', body);
		const result = await response.json();
		return result.result;
	}
);

const coursesSlice = createSlice({
	name: 'courses',
	initialState,
	reducers: {
		addCourse(state, action) {
			state.courses.push(action.payload);
		},
		deleteCourse(state, action) {
			state.courses = state.courses.filter(({ id }) => id !== action.payload);
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchAllCourses.fulfilled, (state, action) => {
			state.courses = action.payload;
		});
		builder.addCase(fetchAllCourses.rejected, (state) => {
			state.courses = [];
		});

		builder.addCase(fetchAddCourse.fulfilled, (state, action) => {
			state.courses = state.courses.push(action.payload);
		});
		builder.addCase(fetchAddCourse.rejected, (state, action) => {
			console.log('error');
		});
	},
});

export const getCourses = (state) => state.coursesReducer.courses;
export const { addCourse, deleteCourse } = coursesSlice.actions;
export const coursesReducer = coursesSlice.reducer;
