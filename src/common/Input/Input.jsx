import PropTypes from 'prop-types';

import './input.scss';

export const Input = ({
	type,
	placeholder,
	labelName,
	maxLength,
	onChange,
	...restProps
}) => {
	return (
		<label className='customInput'>
			{labelName && <div>{labelName}</div>}
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
	labelName: PropTypes.string,
	maxLength: PropTypes.number,
	onChange: PropTypes.func,
};
Input.defaultProps = {
	type: 'text',
	placeholder: '',
	labelName: null,
	maxLength: 30,
	onChange: null,
};
