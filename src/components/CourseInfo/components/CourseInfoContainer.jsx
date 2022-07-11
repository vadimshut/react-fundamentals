import { Navigate, useLocation, useParams } from 'react-router-dom';
import { checkExistCourse } from '../../../helpers/checkExistCourse';
import { ROUTES } from '../../../constants';
import PropTypes, { shape } from 'prop-types';

export const CourseInfoContainer = (WrappedComponent) => {
	const HOC = ({ coursesList, authorsList }) => {
		const { courseId } = useParams();
		let location = useLocation();
		const isCourseExist = checkExistCourse(courseId, coursesList);
		if (!courseId || !isCourseExist) {
			return <Navigate to={ROUTES.LOGIN} state={{ from: location }} replace />;
		}
		return (
			<WrappedComponent
				coursesList={coursesList}
				authorsList={authorsList}
				courseId={courseId}
			/>
		);
	};
	return HOC;
};

CourseInfoContainer.propTypes = {
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

CourseInfoContainer.defaultProps = {
	coursesList: [],
	authorsList: [],
};
