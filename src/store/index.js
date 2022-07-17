import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './user/user';
import { coursesReducer } from './courses/courses';
import { authorsReducer } from './authors/authors';

const store = configureStore({
	reducer: {
		userReducer,
		coursesReducer,
		authorsReducer,
	},
	devTools: true,
});

export default store;
