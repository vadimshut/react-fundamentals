import { useNavigate } from 'react-router-dom';
import { BUTTON_NAMES, ROUTES } from '../../constants';

import { Logo } from './components/Logo/Logo';
import { Button } from '../../common/Button/Button';

import './header.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLogout } from '../../store/user/actions.user';
import { getAuthData } from '../../store/dataFromStore';
import { useEffect } from 'react';

export const Header = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { name } = useSelector(getAuthData);

	const handleClick = () => {
		dispatch(fetchLogout());
	};

	useEffect(() => {
		if (!name) navigate(ROUTES.LOGIN, { replace: true });
	}, [name]);

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
