import { USE_REDUCER_TYPES } from '../constants';

const initialState = {
	isError: false,
	errorMessage: '',
	name: '',
	email: '',
	password: '',
};

const init = () => {
	return initialState;
};

function reducer(state, action) {
	switch (action.type) {
		case USE_REDUCER_TYPES.SET_ERROR:
			return {
				...state,
				isError: true,
				errorMessage: action.payload,
			};
		case USE_REDUCER_TYPES.RESET_ERROR:
			return {
				...state,
				isError: initialState.isError,
				errorMessage: initialState.errorMessage,
			};
		case USE_REDUCER_TYPES.SET_NAME:
			return { ...state, name: action.payload };
		case USE_REDUCER_TYPES.SET_EMAIL:
			return { ...state, email: action.payload };
		case USE_REDUCER_TYPES.SET_PASSWORD:
			return { ...state, password: action.payload };
		case USE_REDUCER_TYPES.RESET_FORM:
			return init(action.payload);
		default:
			throw new Error('Error with action');
	}
}

export { initialState, reducer, init };
