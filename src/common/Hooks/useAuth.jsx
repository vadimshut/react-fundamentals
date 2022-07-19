import { useDispatch, useSelector } from 'react-redux';
import { getRole } from '../../store/dataFromStore';
import { authorityTokenService } from '../../services/AuthorityTokenService';
import { fetchUsersMe } from '../../store/user/actions.user';

export const useAuth = () => {
	const dispatch = useDispatch();
	const role = useSelector(getRole);
	const isAuth = authorityTokenService.checkIsAuthorityTokenExist();
	if (!role) {
		dispatch(fetchUsersMe());
	}
	return { role, isAuth };
};