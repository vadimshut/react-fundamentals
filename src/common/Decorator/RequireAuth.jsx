import { Navigate } from 'react-router-dom';
import { ROUTES } from '../../constants';
import { authorityTokenService } from '../../services/AuthorityTokenService';

export const RequireAuth = ({ children }) => {
	const isAuth = authorityTokenService.checkIsAuthorityTokenExist();
	console.log(isAuth);

	return isAuth ? children : <Navigate to={ROUTES.LOGIN} />;
};
