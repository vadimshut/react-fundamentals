import PropTypes from 'prop-types';
import { Button } from '../../common/Button/Button';
import { BUTTON_NAMES } from '../../constants';

import './course-card.scss';

export const CourseCard = ({
	title,
	description,
	creationDate,
	duration,
	authors,
}) => {
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
					<span>{authors}</span>
				</div>
				<div className='duration'>
					<b>Duration: </b>
					<span>{duration}</span>
				</div>
				<div className='created'>
					<b>Created: </b>
					<span>{creationDate}</span>
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
};

CourseCard.defaultProps = {
	title: null,
	description: null,
	creationDate: null,
	duration: null,
	authors: null,
};
