import { v4 as uuidv4 } from 'uuid';
import { getDate } from './getDate';

export const createNewCourse = (title, description, duration, newAuthorsIds) => {
	const id = uuidv4();
	const creationDate = getDate();
	return {
		id,
		title,
		description,
		creationDate,
		duration: +duration,
		authors: newAuthorsIds,
	};
};
