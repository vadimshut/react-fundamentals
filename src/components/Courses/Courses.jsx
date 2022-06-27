import { useCallback, useMemo, useState } from 'react';
import PropTypes, { shape } from 'prop-types';
import { BUTTON_NAMES } from '../../constants';

import { updateAuthors } from '../../helpers/updateAuthors';
import { CourseCard } from './components/CourseCard/CourseCard';
import { SearchBar } from './components/SearchBar/SearchBar';
import { CreateCourse } from '../CreateCourse/CreateCourse';
import { Button } from '../../common/Button/Button';

import './courses.scss';

export const Courses = ({ coursesList, authorsList }) => {
	const [courses, setCourses] = useState(coursesList);
	const [filteredCourses, setFilteredCourses] = useState([]);
	const [authors, setAuthors] = useState(authorsList);
	const [shouldShowCreateCourse, setShouldShowCreateCourse] = useState(false);

	useMemo(() => {
		setFilteredCourses(courses);
	}, [courses]);

	const handleClickSearch = useCallback(
		(searchValue) => {
			const showCourses = courses.filter(
				({ title, id }) =>
					title.toLowerCase().includes(searchValue.toLowerCase()) ||
					id.toLowerCase().includes(searchValue.toLowerCase())
			);
			setFilteredCourses(showCourses);
		},
		[courses]
	);

	const createNewCourse = useCallback(
		(newCourse, newAuthors) => {
			const newPersonToAuthors = updateAuthors(authors, newAuthors);
			setCourses([...courses, newCourse]);
			setAuthors([...authors, ...newPersonToAuthors]);
			setShouldShowCreateCourse(!shouldShowCreateCourse);
		},
		[authors, courses, shouldShowCreateCourse]
	);

	return (
		<div className='courses'>
			{shouldShowCreateCourse && (
				<CreateCourse authorsList={authors} createNewCourse={createNewCourse} />
			)}
			{!shouldShowCreateCourse && (
				<>
					<div className='coursesControlsWrapper'>
						<SearchBar onClick={handleClickSearch} />
						<Button
							buttonName={BUTTON_NAMES.addCourse}
							onClick={() => setShouldShowCreateCourse(!shouldShowCreateCourse)}
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
								authorsList={authors}
							/>
						)
					)}
				</>
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
