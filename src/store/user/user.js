import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { apiService } from '../../sesrvice';

const initialState = {
	isAuth: false,
	name: '',
	email: '',
	token: '',
	error: '',
	registerError: '',
	registerSuccess: false,
};

const fetchLogin = createAsyncThunk(
	'courses/fetchLogin',
	async (body, { rejectWithValue }) => {
		try {
			const response = await apiService.login('login', body);
			const result = await response.json();
			if (!response.ok) {
				throw new Error(`${result.errors[0]}`);
			}
			return result;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

const fetchRegistration = createAsyncThunk(
	'courses/fetchRegistration',
	async (body, { rejectWithValue }) => {
		try {
			const response = await apiService.registration('register', body);
			const result = await response.json();
			console.log(result);
			if (!response.ok) {
				throw new Error(`${result.errors[0]}`);
			}
			return result;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

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

export {
	getAuthData,
	getRegistrationData,
	fetchRegistration,
	fetchLogin,
	logout,
	userReducer,
};
