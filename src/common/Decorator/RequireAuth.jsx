import { useEffect } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { ROUTES } from '../../constants';
import { authorityTokenService } from '../../services/AuthorityTokenService';

export const RequireAuth = ({ children }) => {
	const isAuth = authorityTokenService.getToken();
	useEffect(() => {}, []);
	let location = useLocation();
	return isAuth ? (
		children
	) : (
		<Navigate to={ROUTES.LOGIN} state={{ from: location }} replace />
	);
};
