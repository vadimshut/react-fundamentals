import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiService } from '../../sesrvice';

const fetchAllAuthors = createAsyncThunk(
	'authors/fetchAllAuthors',
	async () => {
		const response = await apiService.getAllAuthors('authors/all');
		const result = await response.json();
		return result.result;
	}
);

export { fetchAllAuthors };
