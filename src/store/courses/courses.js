import { createSlice } from '@reduxjs/toolkit';
import { fetchAllCourses, fetchAddCourse } from './coureses.actions';

const initialState = {
	courses: [],
};

const coursesSlice = createSlice({
	name: 'courses',
	initialState,
	reducers: {
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

const { deleteCourse } = coursesSlice.actions;
const coursesReducer = coursesSlice.reducer;

export { deleteCourse, coursesReducer };
