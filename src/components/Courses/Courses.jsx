import { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getRole } from '../../store/dataFromStore';
import { BUTTON_NAMES, ROUTES } from '../../constants';
import { CourseCard } from './components/CourseCard/CourseCard';
import { SearchBar } from './components/SearchBar/SearchBar';
import { Button } from '../../common/Button/Button';

import { useGetCoursesAndAuthors } from '../../common/Hooks/useGetCoursesAndAuthors';

import './courses.scss';

export const Courses = () => {
	const navigate = useNavigate();
	const role = useSelector(getRole);
	const isAdmin = role === 'admin';
	const [filteredCourses, setFilteredCourses] = useState([]);
	const { coursesList, authorsList } = useGetCoursesAndAuthors();

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
		navigate(ROUTES.ADD_COURSE);
	};

	return (
		<div className='courses'>
			<div className='coursesControlsWrapper'>
				<SearchBar onClick={handleClickSearch} />
				{isAdmin && <Button buttonName={BUTTON_NAMES.addCourse} onClick={handleClickAddCourse} />}
			</div>

			{filteredCourses.map(({ id, title, description, creationDate, duration, authors }) => (
				<CourseCard
					key={id}
					id={id}
					title={title}
					description={description}
					creationDate={creationDate}
					duration={duration}
					authorsIdsList={authors}
					authorsList={authorsList}
				/>
			))}
		</div>
	);
};
