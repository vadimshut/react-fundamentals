import { useState } from 'react';
import PropTypes, { shape } from 'prop-types';

import { BUTTON_NAMES } from '../../constants';

import { CourseCard } from './components/CourseCard/CourseCard';
import { SearchBar } from './components/SearchBar/SearchBar';
import { Button } from '../../common/Button/Button';

import './courses.scss';

export const Courses = ({ coursesList, authorsList }) => {
	const [filteredCoursesList, setFilteredCoursesList] = useState(coursesList);

	const handleClickSearch = (searchValue) => {
		const filteredCourses = coursesList.filter(({ title }) =>
			title.toLowerCase().includes(searchValue.toLowerCase())
		);
		setFilteredCoursesList(filteredCourses);
	};

	return (
		<div className='courses'>
			<div className='coursesControlsWrapper'>
				<SearchBar onClick={handleClickSearch} />
				<Button buttonName={BUTTON_NAMES.addCourse} />
			</div>
			{filteredCoursesList.map(
				({ id, title, description, creationDate, duration, authors }) => (
					<CourseCard
						key={id}
						title={title}
						description={description}
						creationDate={creationDate}
						duration={duration}
						authors={authors}
						authorsList={authorsList}
					/>
				)
			)}
		</div>
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
