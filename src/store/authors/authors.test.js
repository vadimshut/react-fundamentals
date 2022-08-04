import { authorsReducer } from './authors';

describe('user', () => {
	it('should return the initial state', () => {
		expect(authorsReducer(undefined, {})).toEqual({
			authors: [],
		});
	});
});
