import { createAsyncThunk } from '@reduxjs/toolkit';
import { authorsService } from '../../services/authors.service';

const fetchAllAuthors = createAsyncThunk(
	'authors/fetchAllAuthors',
	async () => {
		const response = await authorsService.getAllAuthors('authors/all');
		const result = await response.json();
		return result.result;
	}
);

export { fetchAllAuthors };
