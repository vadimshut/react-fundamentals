import PropTypes, { shape } from 'prop-types';
import { useParams } from 'react-router-dom';

import { PageDecorator } from '../../common/Decorator/PageDecorator';
import { findCourse } from '../../helpers/findCourse';
import { useMemo } from 'react';

import './courseInfo.scss';
import { getCourseDuration } from '../../helpers/getCourseDuration';
import { formatCreationDate } from '../../helpers/formatCreationDate';
import { getAuthorsNameList } from '../../helpers/getAuthors';

export const CourseInfo = ({ coursesList, authorsList }) => {
	const { courseId } = useParams();

	const { id, title, description, creationDate, duration, authors } = useMemo(
		() => findCourse(coursesList, courseId),
		[coursesList, courseId]
	);

	const courseDuration = useMemo(() => getCourseDuration(duration), [duration]);
	const courseCreationDate = useMemo(
		() => formatCreationDate(creationDate),
		[creationDate]
	);
	const authorsNameList = useMemo(
		() => getAuthorsNameList(authors, authorsList),
		[authors, authorsList]
	);

	return (
		<PageDecorator>
			<div className='courseInfo'>
				<h1 className='title'>{title}</h1>
				<div className='content'>
					<div className='leftContainer '>
						<div className='describe'>{description}</div>
					</div>
					<div className='rightContainer'>
						<div className='id mb-0_5'>
							<b>ID: </b>
							<span>{id}</span>
						</div>
						<div className='duration mb-0_5'>
							<b>Duration: </b>
							<span>{`${courseDuration} hours`}</span>
						</div>
						<div className='created mb-0_5'>
							<b>Created: </b>
							<span>{courseCreationDate}</span>
						</div>
						<div className='authors mb-0_5'>
							<b>Authors: </b>
							<ul>
								{authorsNameList.map(({ name, id }) => (
									<li key={id}>{name}</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</PageDecorator>
	);
};

CourseInfo.propTypes = {
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

CourseInfo.defaultProps = {
	coursesList: [],
	authorsList: [],
};
