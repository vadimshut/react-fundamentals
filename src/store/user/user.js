import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './user.initialState';
import { fetchLogin, fetchRegistration } from './actions.user';

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		logout(state) {
			state.isAuth = false;
			state.name = '';
			state.email = '';
			state.token = '';
			state.error = '';
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchLogin.fulfilled, (state, action) => {
			const {
				result: token,
				successful: isAuth,
				user: { email, name },
			} = action.payload;
			state.name = name;
			state.email = email;
			state.token = token;
			state.isAuth = isAuth;
			state.error = '';
		});

		builder.addCase(fetchLogin.rejected, (state, action) => {
			state.error = action.payload;
			state.successful = false;
		});

		builder.addCase(fetchRegistration.fulfilled, (state) => {
			state.registerSuccess = true;
			state.registerError = '';
		});

		builder.addCase(fetchRegistration.rejected, (state, action) => {
			state.registerSuccess = false;
			state.registerError = action.payload;
		});
	},
});

const getAuthData = (state) => state.userReducer;
const getRegistrationData = (state) => ({
	registerSuccess: state.userReducer.registerSuccess,
	registerError: state.userReducer.registerError,
});
const { logout } = userSlice.actions;
const userReducer = userSlice.reducer;

export { getAuthData, getRegistrationData, logout, userReducer };
