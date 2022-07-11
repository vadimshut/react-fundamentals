import { memo } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'react-icons-kit';
import { arrow_left } from 'react-icons-kit/ikons/arrow_left';
import { ROUTES } from '../../../../constants';

import './backToCourses.scss';

export const BackToCoursesUI = () => {
	return (
		<Link to={ROUTES.COURSES} className='linkBackTo'>
			<Icon size={20} icon={arrow_left} />
			<div>Back to courses</div>
		</Link>
	);
};

export const BackToCourses = memo(BackToCoursesUI);
