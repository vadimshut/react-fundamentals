import PropTypes from 'prop-types';
import './input.scss';

export const Input = ({
	type,
	placeholder,
	maxLength,
	onChange,
	...restProps
}) => {
	console.log(restProps);
	return (
		<label className='customInput'>
			<input
				type={type}
				className='input'
				placeholder={placeholder}
				maxLength={maxLength}
				onChange={onChange}
			/>
		</label>
	);
};
Input.propTypes = {
	type: PropTypes.string,
	placeholder: PropTypes.string,
	maxLength: PropTypes.number,
	onChange: PropTypes.func,
};
Input.defaultProps = {
	type: 'text',
	placeholder: '',
	maxLength: 30,
	onChange: null,
};
