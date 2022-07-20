import { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGetCourseById } from '../../../store/courses/coureses.actions';
import { fetchAllAuthors } from '../../../store/authors/authors.actions';

import { BUTTON_NAMES } from '../../../constants';
import { getAuthors, getCourseForUpdate } from '../../../store/dataFromStore';
import { getAuthorsFromAuthorsIds } from '../../../helpers/getAuthors';

export const useCreateProps = () => {
	const { courseId } = useParams();
	const dispatch = useDispatch();
	const { title, description, duration = '', authors = [], id } = useSelector(getCourseForUpdate);
	const authorsList = useSelector(getAuthors);

	useEffect(() => {
		if (courseId) dispatch(fetchGetCourseById(courseId));
	}, [courseId, dispatch]);

	const authorsListFromIds = useMemo(() => getAuthorsFromAuthorsIds(authorsList, authors), [authors, authorsList]);
	const buttonName = courseId ? BUTTON_NAMES.updateCourse : BUTTON_NAMES.createCourse;

	// useEffect(() => {
	// 	if (authors.length) {
	// 		dispatch(fetchAllAuthors());
	// 	}
	// }, [authors, dispatch]);

	return courseId
		? {
				courseTitle: title,
				courseDescription: description,
				courseDuration: duration.toString(),
				courseSelectedAuthors: authorsListFromIds,
				buttonName,
				id,
		  }
		: {
				courseTitle: '',
				courseDescription: '',
				courseDuration: '',
				courseSelectedAuthors: [],
				buttonName,
				id: '',
		  };
};
