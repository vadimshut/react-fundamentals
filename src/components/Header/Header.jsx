import { Logo } from './components/Logo/Logo';

import './header.scss';
import { Button } from '../../common/Button/Button';
import { BUTTON_NAMES } from '../../constants';

export const Header = () => {
	return (
		<div className='header'>
			<Logo />
			<div className='buttonWrapper'>
				<div>Dave</div>
				<Button buttonName={BUTTON_NAMES.logout} />
			</div>
		</div>
	);
};
