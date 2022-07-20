import { createAsyncThunk } from '@reduxjs/toolkit';
import { coursesService } from '../../services/courses.service';
import { deleteCourse, resetCourseForUpdate } from './courses';

const fetchAllCourses = createAsyncThunk('courses/fetchAllCourses', async () => {
	const response = await coursesService.getAllCourses('all');
	const result = await response.json();
	return result.result;
});

const fetchAddCourse = createAsyncThunk('/courses/fetchAddCourse', async (body) => {
	const response = await coursesService.addNewCourse('add', body);
	const result = await response.json();
	return result.result;
});

const fetchDeleteCourse = createAsyncThunk('/courses/fetchDeleteCourse', async (id, { dispatch }) => {
	const response = await coursesService.deleteCourse(id);
	const result = await response.json();
	if (result.successful) {
		dispatch(deleteCourse(id));
	}
	return result.result;
});

const fetchGetCourseById = createAsyncThunk('/courses/fetchGetCourseById', async (id, { dispatch }) => {
	const response = await coursesService.getCourseById(id);
	const result = await response.json();
	return result.result;
});

const fetchUpdateCourse = createAsyncThunk('/courses/fetchUpdateCourse', async ({ id, body }, { dispatch }) => {
	const response = await coursesService.updateCourse(id, body);
	const result = await response.json();
	if (result.successful) {
		dispatch(resetCourseForUpdate());
	}
	return result.result;
});

export { fetchAllCourses, fetchAddCourse, fetchDeleteCourse, fetchGetCourseById, fetchUpdateCourse };
