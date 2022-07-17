import { useNavigate } from 'react-router-dom';
import { BUTTON_NAMES, ROUTES } from '../../constants';
import { Auth } from '../../helpers/auth';

import { Logo } from './components/Logo/Logo';
import { Button } from '../../common/Button/Button';

import './header.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthData, logout } from '../../store/user/user';

export const Header = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { name } = useSelector(getAuthData);

	const handleClick = () => {
		Auth.logout();
		dispatch(logout());
		navigate(ROUTES.LOGIN, { replace: true });
	};

	return (
		<div className='header'>
			<Logo />
			{name && (
				<div className='buttonWrapper'>
					<div>{name.toUpperCase()}</div>
					<Button buttonName={BUTTON_NAMES.logout} onClick={handleClick} />
				</div>
			)}
		</div>
	);
};
