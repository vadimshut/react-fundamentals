import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isAuth: false,
	name: '',
	email: '',
	token: '',
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setIsAuth(state, action) {
			state.isAuth = action.payload;
		},
		setName(state, action) {
			state.name = action.payload;
		},
		setEmail(state, action) {
			state.email = action.payload;
		},
		setToken(state, action) {
			state.token = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(() => {});
	},
});

// export const {} = userSlice.actions;

export const userReducer = userSlice.reducer;
