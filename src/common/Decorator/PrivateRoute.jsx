import { Navigate } from 'react-router-dom';
import { ROUTES } from '../../constants';
import PropTypes from 'prop-types';
import { useAuth } from '../Hooks/useAuth';

export const PrivateRoute = ({ children, checkParameter }) => {
	const { role, isAuth } = useAuth();
	if (!isAuth) return <Navigate to={ROUTES.LOGIN} />;
	if (checkParameter === 'role') {
		return role === 'admin' ? children : <Navigate to={ROUTES.LOGIN} />;
	} else {
		return { children };
	}
};

PrivateRoute.propTypes = {
	checkParameter: PropTypes.oneOf(['token', 'role']),
};

PrivateRoute.defaultProps = {
	checkParameter: 'token',
};
