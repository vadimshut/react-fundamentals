import { useNavigate } from 'react-router-dom';
import { BUTTON_NAMES, ROUTES } from '../../constants';
import { Auth } from '../../helpers/auth';

import { Logo } from './components/Logo/Logo';
import { Button } from '../../common/Button/Button';

import './header.scss';

export const Header = () => {
	const navigate = useNavigate();
	const userName = new Auth().getUserName();
	const handleClick = () => {
		Auth.logout();
		navigate(ROUTES.LOGIN, { replace: true });
	};

	return (
		<div className='header'>
			<Logo />
			{userName && (
				<div className='buttonWrapper'>
					<div>{userName.toUpperCase()}</div>
					<Button buttonName={BUTTON_NAMES.logout} onClick={handleClick} />
				</div>
			)}
		</div>
	);
};
