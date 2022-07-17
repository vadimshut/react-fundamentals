import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiService } from '../../sesrvice';

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
			if (!response.ok) {
				throw new Error(`${result.errors[0]}`);
			}
			return result;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

const fetchUsersMe = createAsyncThunk('courses/fetchUsersMe', async () => {
	const response = await apiService.usersMe('users/me');
	const result = await response.json();
	return result;
});

export { fetchLogin, fetchRegistration, fetchUsersMe };
