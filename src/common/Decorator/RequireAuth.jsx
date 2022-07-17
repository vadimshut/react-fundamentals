import { useLocation, Navigate } from 'react-router-dom';
import { ROUTES } from '../../constants';
import { authority } from '../../helpers/auth';

export const RequireAuth = ({ children }) => {
	const isAuth = authority.getToken();
	let location = useLocation();
	return isAuth ? (
		children
	) : (
		<Navigate to={ROUTES.LOGIN} state={{ from: location }} replace />
	);
};
