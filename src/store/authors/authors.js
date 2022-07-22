import { createSlice } from '@reduxjs/toolkit';
import { fetchAddAuthor, fetchAllAuthors } from './authors.actions';

const initialState = {
	authors: [],
};

const authorsSlice = createSlice({
	name: 'authors',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchAllAuthors.fulfilled, (state, action) => {
			state.authors = action.payload;
		});

		builder.addCase(fetchAllAuthors.rejected, (state) => {
			state.authors = [];
		});

		builder.addCase(fetchAddAuthor.fulfilled, (state, action) => {
			state.authors = [...state.authors, action.payload];
		});
	},
});

// const { addAuthor } = authorsSlice.actions;
const authorsReducer = authorsSlice.reducer;

export { authorsReducer };
