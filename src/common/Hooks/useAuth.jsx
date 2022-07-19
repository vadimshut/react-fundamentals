import { useSelector } from 'react-redux';
import { getAuthData } from '../../store/dataFromStore';
import { authorityTokenService } from '../../services/AuthorityTokenService';
import { fetchUsersMe } from '../../store/user/actions.user';

export const useAuth = () => {
	const { role } = useSelector(getAuthData());
	const isAuth = authorityTokenService.checkIsAuthorityTokenExist();
	if (!role) fetchUsersMe();
	return { role, isAuth };
};
