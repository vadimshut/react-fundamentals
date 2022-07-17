import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './user.initialState';
import { fetchLogin, fetchRegistration } from './actions.user';

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
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

const userReducer = userSlice.reducer;

const getAuthData = (state) => state.userReducer;
const getRegistrationData = (state) => ({
	registerSuccess: state.userReducer.registerSuccess,
	registerError: state.userReducer.registerError,
});

export { getAuthData, getRegistrationData, userReducer };
