import PropTypes from 'prop-types';
import classnames from 'classnames';
import './button.scss';

export const Button = ({ buttonText, className, onClick }) => {
	return (
		<button className={classnames('button', className)} onClick={onClick}>
			{buttonText}
		</button>
	);
};

Button.propTypes = {
	buttonText: PropTypes.string,
	className: PropTypes.string,
	onClick: PropTypes.func,
};

Button.defaultProps = {
	buttonText: null,
	className: null,
	onClick: null,
};
