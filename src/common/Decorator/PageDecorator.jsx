import PropTypes from 'prop-types';
import { Header } from '../../components/Header/Header';

import './pageDecorator.scss';

export const PageDecorator = ({ children }) => {
	return (
		<div className='pageDecorator'>
			<Header />
			<div className='main'>{children}</div>
		</div>
	);
};

PageDecorator.propTypes = {
	children: PropTypes.element.isRequired,
};
