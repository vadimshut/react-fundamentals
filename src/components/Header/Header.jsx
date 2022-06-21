import { BUTTON_NAMES } from '../../constants';
import { Logo } from './components/Logo/Logo';
import { Button } from '../../common/Button/Button';

import './header.scss';

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
