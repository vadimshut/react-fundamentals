import PropTypes, { shape } from 'prop-types';
import { CourseCard } from './components/CourseCard/CourseCard';
import { SearchBar } from './components/SearchBar/SearchBar';
import './courses.scss';
import { BUTTON_NAMES } from '../../constants';
import { Button } from '../../common/Button/Button';

export const Courses = ({ coursesList, authorsList }) => {
	return (
		<div className='courses'>
			<div className='coursesControlsWrapper'>
				<SearchBar />
				<Button buttonName={BUTTON_NAMES.addCourse} />
			</div>
			{coursesList.map(
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
