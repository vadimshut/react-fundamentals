import { useCallback } from 'react';
import PropTypes, { shape } from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Icon } from 'react-icons-kit';
import { trash } from 'react-icons-kit/iconic/trash';
import { pencil } from 'react-icons-kit/iconic/pencil';

import { Button } from '../../../../common/Button/Button';
import { BUTTON_NAMES, ROUTES } from '../../../../constants';

import { deleteCourse } from '../../../../store/courses/courses';
import { getCourseDuration } from '../../../../helpers/getCourseDuration';
import { formatCreationDate } from '../../../../helpers/formatCreationDate';
import { getAuthors } from '../../../../helpers/getAuthors';

import './course-card.scss';

export const CourseCard = ({ title, description, creationDate, duration, authorsIdsList, authorsList, id }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const courseDuration = getCourseDuration(duration);
	const courseCreationDate = formatCreationDate(creationDate);
	const authorsToString = getAuthors(authorsIdsList, authorsList);

	const handleShowCourse = () => {
		navigate(`${ROUTES.COURSES}/${id}`, {
			replace: true,
		});
	};

	const handleDeleteCourse = useCallback(() => {
		dispatch(deleteCourse(id));
	}, [dispatch, id]);

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
					<span>{`${courseDuration} hours`}</span>
				</div>
				<div className='created'>
					<b>Created: </b>
					<span>{courseCreationDate}</span>
				</div>
				<div className='buttonWrapper'>
					<Button buttonName={BUTTON_NAMES.showCourse} onClick={handleShowCourse} />
					<Button className='button-icon'>
						<Icon size={20} icon={pencil} />
					</Button>
					<Button className='button-icon' onClick={handleDeleteCourse}>
						<Icon size={20} icon={trash} />
					</Button>
				</div>
			</div>
		</div>
	);
};

CourseCard.propTypes = {
	id: PropTypes.string,
	title: PropTypes.string,
	description: PropTypes.string,
	creationDate: PropTypes.string,
	duration: PropTypes.number,
	authorsIdsList: PropTypes.arrayOf(PropTypes.string),
	authorsList: PropTypes.arrayOf(
		shape({
			id: PropTypes.string,
			name: PropTypes.string,
		})
	),
};

CourseCard.defaultProps = {
	id: null,
	title: null,
	description: null,
	creationDate: null,
	duration: null,
	authorsIdsList: [],
	authorsList: [],
};
