import { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { BUTTON_NAMES, ROUTES } from '../../constants';

import { getCourses } from '../../store/courses/courses';
import { getAuthors } from '../../store/dataFromStore';

import { CourseCard } from './components/CourseCard/CourseCard';
import { SearchBar } from './components/SearchBar/SearchBar';
import { Button } from '../../common/Button/Button';

import { fetchAllCourses } from '../../store/courses/coureses.actions';
import { fetchAllAuthors } from '../../store/authors/authors.actions';

import './courses.scss';

export const Courses = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const coursesList = useSelector(getCourses);
	const authorsList = useSelector(getAuthors);
	const [filteredCourses, setFilteredCourses] = useState([]);

	useEffect(() => {
		dispatch(fetchAllCourses());
		dispatch(fetchAllAuthors());
	}, [dispatch]);

	useMemo(() => {
		setFilteredCourses(coursesList);
	}, [coursesList]);

	const handleClickSearch = useCallback(
		(searchValue) => {
			const showCourses = coursesList.filter(
				({ title, id }) =>
					title.toLowerCase().includes(searchValue.toLowerCase()) ||
					id.toLowerCase().includes(searchValue.toLowerCase())
			);
			setFilteredCourses(showCourses);
		},
		[coursesList]
	);

	const handleClickAddCourse = () => {
		navigate(ROUTES.ADD_COURSE, { replace: true });
	};

	return (
		<div className='courses'>
			<div className='coursesControlsWrapper'>
				<SearchBar onClick={handleClickSearch} />
				<Button buttonName={BUTTON_NAMES.addCourse} onClick={handleClickAddCourse} />
			</div>

			{filteredCourses.map(({ id, title, description, creationDate, duration, authors: authorsIdsList }) => (
				<CourseCard
					key={id}
					id={id}
					title={title}
					description={description}
					creationDate={creationDate}
					duration={duration}
					authorsIdsList={authorsIdsList}
					authorsList={authorsList}
				/>
			))}
		</div>
	);
};
