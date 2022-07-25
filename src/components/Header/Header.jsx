import { useNavigate } from 'react-router-dom';
import { BUTTON_NAMES, ROUTES } from '../../constants';

import { Logo } from './components/Logo/Logo';
import { Button } from '../../common/Button/Button';

import './header.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLogout } from '../../store/user/actions.user';
import { getAuthData } from '../../store/selectors';

export const Header = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { isAuth, name, role } = useSelector(getAuthData);
	const userName = role === 'admin' ? 'admin' : name;

	const handleClick = async () => {
		await dispatch(fetchLogout());
		navigate(ROUTES.LOGIN, { replace: true });
	};

	return (
		<div className='header'>
			<Logo />
			{isAuth && (
				<div className='buttonWrapper'>
					<div data-testid='userName'>{userName}</div>
					<Button buttonName={BUTTON_NAMES.logout} onClick={handleClick} />
				</div>
			)}
		</div>
	);
};
