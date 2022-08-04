import { coursesReducer } from './courses';
import { fetchAddCourse } from './coureses.actions';

const initialState = {
	courses: [],
	courseForUpdate: {},
};

const newCourse = {
	title: 'title',
	description: 'description',
	creationDate: '9/3/2021',
	duration: 30,
	authors: ['9b87e8b8-6ba5-40fc-a439-c4e30a373d36'],
	id: '66cc289e-6de9-49b2-9ca7-8b4f409d6467',
};

describe('user', () => {
	it('should return the initial state', () => {
		expect(coursesReducer(undefined, {})).toEqual(initialState);
	});

	it('reducer should handle SAVE_COURSE and returns new state', () => {
		const action = { type: fetchAddCourse.fulfilled.type, payload: newCourse };
		const state = coursesReducer(initialState, action);
		expect(state.courses).toEqual([newCourse]);
	});
});
