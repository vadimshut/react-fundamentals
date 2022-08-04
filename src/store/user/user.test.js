import { userReducer } from './user';
import { initialState } from './user.initialState';

describe('user', () => {
	it('should return the initial state', () => {
		expect(userReducer(undefined, {})).toEqual(initialState);
	});
});
