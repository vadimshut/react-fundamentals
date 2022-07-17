import { createSlice } from '@reduxjs/toolkit';
import { fetchAllAuthors } from './authors.actions';

const initialState = {
	authors: [],
};

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

const getAuthors = (state) => state.authorsReducer.authors;
const { addAuthors, deleteAuthors, updateAuthors } = authorsSlice.actions;
const authorsReducer = authorsSlice.reducer;

export { getAuthors, addAuthors, deleteAuthors, updateAuthors, authorsReducer };
