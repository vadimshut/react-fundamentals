import { Navigate } from 'react-router-dom';
import { ROUTES } from '../../constants';
import PropTypes from 'prop-types';
import { useAuth } from '../Hooks/useAuth';

export const PrivateRoute = ({ checkParameter, children }) => {
	const { role, isAuth } = useAuth();
	if (!isAuth) return <Navigate to={ROUTES.LOGIN} />;
	if (checkParameter === 'role' && role === 'admin') {
		return children;
	}
	if (checkParameter === 'role' && role === 'user') {
		return <Navigate to={ROUTES.COURSES} />;
	}
	return children;
};

PrivateRoute.propTypes = {
	checkParameter: PropTypes.oneOf(['token', 'role']),
	children: PropTypes.node,
};

PrivateRoute.defaultProps = {
	checkParameter: 'token',
	children: null,
};
