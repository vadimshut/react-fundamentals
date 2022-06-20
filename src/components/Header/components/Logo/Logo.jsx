import './logo.scss';

const logo = require('../../../../assets/epamLogo.png');

export const Logo = () => {
	return (
		<div className='logo'>
			<img src={logo} alt='epam logo' width='100%' height='100%' />
		</div>
	);
};
