import { mockedCoursesList } from '../../constants';
import { CourseCard } from '../CourseCard/CourseCard';

import './courses.scss';

export const Courses = () => {
	return (
		<div className='courses'>
			{mockedCoursesList.map(
				({ id, title, description, creationDate, duration, authors }) => (
					<CourseCard
						key={id}
						title={title}
						description={description}
						creationDate={creationDate}
						duration={duration}
						authors={authors}
					/>
				)
			)}
		</div>
	);
};
