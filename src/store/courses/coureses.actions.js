import { createAsyncThunk } from '@reduxjs/toolkit';
import { coursesService } from '../../services/courses.service';
import { deleteCourse } from './courses';

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

export { fetchAllCourses, fetchAddCourse, fetchDeleteCourse };
