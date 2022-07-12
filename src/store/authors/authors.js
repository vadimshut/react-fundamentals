import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apiService } from '../../sesrvice';

const initialState = {
	authors: [],
};

export const fetchAllAuthors = createAsyncThunk(
	'authors/fetchAllAuthors',
	async () => {
		const response = await apiService.getAllAuthors('authors/all');
		const result = await response.json();
		return result.result;
	}
);

const authorsSlice = createSlice({
	name: 'authors',
	initialState,
	reducers: {
		addAuthors(state, action) {
			state.authors.push(action.payload);
		},
		deleteAuthors(state, action) {
			state.authors.push(action.payload);
		},
		updateAuthors(state, action) {
			state.authors.push(action.payload);
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchAllAuthors.fulfilled, (state, action) => {
			state.authors = action.payload;
		});
		builder.addCase(fetchAllAuthors.rejected, (state) => {
			state.authors = [];
		});
	},
});

export const getAuthors = (state) => state.authorsReducer.authors;
export const { addAuthors, deleteAuthors, updateAuthors } =
	authorsSlice.actions;
export const authorsReducer = authorsSlice.reducer;
