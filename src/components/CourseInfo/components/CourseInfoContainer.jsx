import { useSelector } from 'react-redux';
import { Navigate, useLocation, useParams } from 'react-router-dom';
import { checkExistCourse } from '../../../helpers/checkExistCourse';
import { ROUTES } from '../../../constants';

import { getAuthors, getCourses } from '../../../store/selectors';

export const CourseInfoContainer = (WrappedComponent) => {
	const HOC = () => {
		const coursesList = useSelector(getCourses);
		const authorsList = useSelector(getAuthors);
		const { courseId } = useParams();
		let location = useLocation();
		const isCourseExist = checkExistCourse(courseId, coursesList);
		if (!courseId || !isCourseExist) {
			return <Navigate to={ROUTES.LOGIN} state={{ from: location }} replace />;
		}
		return <WrappedComponent coursesList={coursesList} authorsList={authorsList} courseId={courseId} />;
	};
	return HOC;
};
