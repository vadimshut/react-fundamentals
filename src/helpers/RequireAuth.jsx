import { useLocation, Navigate } from 'react-router-dom';
import { ROUTES } from '../constants';
import { Auth } from './auth';

export const RequireAuth = ({ children }) => {
	const isAuth = new Auth().checkAuthorization();
	let location = useLocation();
	if (!isAuth) {
		return <Navigate to={ROUTES.LOGIN} state={{ from: location }} replace />;
	}

	return children;
};
