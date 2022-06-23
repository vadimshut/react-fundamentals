import PropTypes from 'prop-types';
import classnames from 'classnames';
import './button.scss';

export const Button = ({ buttonName, className, onClick, ...restProps }) => {
	return (
		<button
			className={classnames('button', className)}
			onClick={onClick}
			{...restProps}
		>
			{buttonName}
		</button>
	);
};

Button.propTypes = {
	buttonName: PropTypes.string,
	className: PropTypes.string,
	onClick: PropTypes.func,
};

Button.defaultProps = {
	buttonName: null,
	className: null,
	onClick: null,
};
