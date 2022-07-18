import { createAsyncThunk } from '@reduxjs/toolkit';
import { usersService } from '../../services/users.sesrvice';
import { resetToDefault } from './user';

const fetchRegistration = createAsyncThunk(
	'courses/fetchRegistration',
	async (body, { rejectWithValue }) => {
		try {
			const response = await usersService.registration('register', body);
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

const fetchLogin = createAsyncThunk(
	'courses/fetchLogin',
	async (body, { rejectWithValue }) => {
		try {
			const { status, result } = await usersService.login('login', body);
			if (!status) throw new Error(`${result.result}`);
			return result;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

const fetchLogout = createAsyncThunk(
	'courses/fetchLogout',
	async (_, { rejectWithValue }) => {
		try {
			await usersService.logout('logout');
			return;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

const fetchUsersMe = createAsyncThunk('courses/fetchUsersMe', async () => {
	const response = await usersService.usersMe('users/me');
	const result = await response.json();
	return result;
});

export { fetchRegistration, fetchLogin, fetchLogout, fetchUsersMe };
