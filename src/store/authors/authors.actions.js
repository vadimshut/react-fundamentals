import { createAsyncThunk } from '@reduxjs/toolkit';
import { authorsService } from '../../services/authors.service';

const fetchAllAuthors = createAsyncThunk('authors/fetchAllAuthors', async () => {
	const response = await authorsService.getAllAuthors('all');
	const result = await response.json();
	return result.result;
});

const fetchAddAuthor = createAsyncThunk('authors/fetchAddAuthor', async (body) => {
	const response = await authorsService.addAuthor('add', body);
	const result = await response.json();
	return result.result;
});

export { fetchAllAuthors, fetchAddAuthor };
