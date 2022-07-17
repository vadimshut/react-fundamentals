import { createAsyncThunk } from '@reduxjs/toolkit';
import { coursesService } from '../../services/courses.service';

const fetchAllCourses = createAsyncThunk(
	'courses/fetchAllCourses',
	async () => {
		const response = await coursesService.getAllCourses('all');
		const result = await response.json();
		return result.result;
	}
);

const fetchAddCourse = createAsyncThunk(
	'/courses/fetchAddCourse',
	async (body) => {
		const response = await coursesService.addNewCourse('add', body);
		const result = await response.json();
		return result.result;
	}
);

export { fetchAllCourses, fetchAddCourse };
