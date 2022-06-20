import PropTypes, { shape } from 'prop-types';
import { Button } from '../../common/Button/Button';
import { BUTTON_NAMES } from '../../constants';

import './course-card.scss';
import { getCourseDuration } from '../../helpers/getCourseDuration';
import { formatCreationDate } from '../../helpers/formatCreationDate';
import { getAuthors } from '../../helpers/getAuthors';

export const CourseCard = ({
	title,
	description,
	creationDate,
	duration,
	authors,
	authorsList,
}) => {
	const courseDuration = getCourseDuration(duration);
	const courseCreationDate = formatCreationDate(creationDate);
	const authorsToString = getAuthors(authors, authorsList);

	return (
		<div className='CourseCard'>
			<div className='leftContainer '>
				<div className='title '>
					<b>{title}</b>
				</div>
				<div className='describe'>{description}</div>
			</div>
			<div className='rightContainer'>
				<div className='authors'>
					<b>Authors: </b>
					<span>{authorsToString}</span>
				</div>
				<div className='duration'>
					<b>Duration: </b>
					<span>{courseDuration}</span>
				</div>
				<div className='created'>
					<b>Created: </b>
					<span>{courseCreationDate}</span>
				</div>
				<div className='buttonWrapper'>
					<Button buttonName={BUTTON_NAMES.showCourse} />
				</div>
			</div>
		</div>
	);
};

CourseCard.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	creationDate: PropTypes.string,
	duration: PropTypes.number,
	authors: PropTypes.arrayOf(PropTypes.string),
	authorsList: PropTypes.arrayOf(
		shape({
			id: PropTypes.string,
			name: PropTypes.string,
		})
	),
};

CourseCard.defaultProps = {
	title: null,
	description: null,
	creationDate: null,
	duration: null,
	authors: null,
	authorsList: [],
};
