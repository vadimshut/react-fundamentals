import { createSlice } from '@reduxjs/toolkit';
import { fetchAllCourses, fetchAddCourse, fetchGetCourseById, fetchUpdateCourse } from './coureses.actions';

const initialState = {
	courses: [],
	courseForUpdate: {},
};

const coursesSlice = createSlice({
	name: 'courses',
	initialState,
	reducers: {
		deleteCourse(state, action) {
			state.courses = state.courses.filter(({ id }) => id !== action.payload);
		},
		resetCourseForUpdate(state) {
			state.courseForUpdate = null;
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
			state.courses = [...state.courses, action.payload];
		});

		builder.addCase(fetchGetCourseById.fulfilled, (state, action) => {
			state.courseForUpdate = action.payload;
		});

		builder.addCase(fetchUpdateCourse.fulfilled, (state, action) => {
			state.courses = state.courses.map((course) => {
				return course.id === action.payload.id ? action.payload : course;
			});
		});
	},
});

const { deleteCourse, resetCourseForUpdate } = coursesSlice.actions;
const coursesReducer = coursesSlice.reducer;

export { deleteCourse, resetCourseForUpdate, coursesReducer };
