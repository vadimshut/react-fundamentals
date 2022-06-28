import { useLocation, Navigate } from 'react-router-dom';
import { Auth } from './auth';

export const RequireAuth = ({ children }) => {
	const isAuth = new Auth().checkAuthorization();
	let location = useLocation();

	if (!isAuth) {
		return <Navigate to='/login' state={{ from: location }} replace />;
	}

	return children;
};
