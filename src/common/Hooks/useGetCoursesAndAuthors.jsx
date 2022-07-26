import { useEffect } from 'react';
import { fetchAllCourses } from '../../store/courses/coureses.actions';
import { fetchAllAuthors } from '../../store/authors/authors.actions';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthors, getCourses } from '../../store/selectors';

export const useGetCoursesAndAuthors = () => {
	const dispatch = useDispatch();
	const coursesList = useSelector(getCourses);
	const authorsList = useSelector(getAuthors);

	useEffect(() => {
		if (!coursesList.length || !authorsList.length) {
			dispatch(fetchAllCourses());
			dispatch(fetchAllAuthors());
		}
	}, [authorsList, coursesList, dispatch]);

	return { coursesList, authorsList };
};
