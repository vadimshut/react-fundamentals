import { useCallback, useMemo, useState } from 'react';
import PropTypes, { shape } from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { BUTTON_NAMES } from '../../constants';

import { CourseCard } from './components/CourseCard/CourseCard';
import { SearchBar } from './components/SearchBar/SearchBar';
import { Button } from '../../common/Button/Button';
import { PageDecorator } from '../../common/Decorator/PageDecorator';

import './courses.scss';

export const Courses = ({ coursesList, authorsList }) => {
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
		navigate('/courses/add', { replace: true });
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

Courses.propTypes = {
	coursesList: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string,
			title: PropTypes.string,
			description: PropTypes.string,
			creationDate: PropTypes.string,
			duration: PropTypes.number,
			authors: PropTypes.arrayOf(PropTypes.string),
		})
	),
	authorsList: PropTypes.arrayOf(
		shape({
			id: PropTypes.string,
			name: PropTypes.string,
		})
	),
};

Courses.defaultProps = {
	coursesList: [],
	authorsList: [],
};
