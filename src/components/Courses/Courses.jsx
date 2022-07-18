import { useCallback, useMemo, useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BUTTON_NAMES, ROUTES } from '../../constants';

import { getCourses } from '../../store/courses/courses';

import { CourseCard } from './components/CourseCard/CourseCard';
import { SearchBar } from './components/SearchBar/SearchBar';
import { Button } from '../../common/Button/Button';
import { PageDecorator } from '../../common/Decorator/PageDecorator';

import './courses.scss';
import { getAuthors } from '../../helpers/getAuthors';

export const Courses = () => {
	const coursesList = useSelector(getCourses);
	const authorsList = useSelector(getAuthors);

	const [filteredCourses, setFilteredCourses] = useState([]);
	const navigate = useNavigate();

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
		<PageDecorator>
			<div className='courses'>
				<div className='coursesControlsWrapper'>
					<SearchBar onClick={handleClickSearch} />
					<Button
						buttonName={BUTTON_NAMES.addCourse}
						onClick={handleClickAddCourse}
					/>
				</div>

				{filteredCourses.map(
					({
						id,
						title,
						description,
						creationDate,
						duration,
						authors: authorsIdsList,
					}) => (
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
					)
				)}
			</div>
		</PageDecorator>
	);
};
