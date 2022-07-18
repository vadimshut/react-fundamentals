import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './user.initialState';
import {
	fetchLogin,
	fetchLogout,
	fetchRegistration,
	fetchUsersMe,
} from './actions.user';

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		resetToDefault(state) {
			state = initialState;
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
		builder.addCase(fetchLogout.fulfilled, (state) => {
			state.isAuth = false;
			state.name = '';
			state.email = '';
			state.token = '';
			state.error = '';
			state.registerError = '';
			state.registerSuccess = false;
			state.role = '';
		});
	},
});

const userReducer = userSlice.reducer;

const { resetToDefault } = userSlice.actions;

export { resetToDefault, userReducer };
