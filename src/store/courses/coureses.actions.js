import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiService } from '../../sesrvice';

const fetchAllCourses = createAsyncThunk(
	'courses/fetchAllCourses',
	async () => {
		const response = await apiService.getAllCourses('courses/all');
		const result = await response.json();
		return result.result;
	}
);

const fetchAddCourse = createAsyncThunk(
	'/courses/fetchAddCourse',
	async (body) => {
		const response = await apiService.addNewCourse('courses/add', body);
		const result = await response.json();
		return result.result;
	}
);

export { fetchAllCourses, fetchAddCourse };
