import PropTypes from 'prop-types';
import classnames from 'classnames';

import './input.scss';

export const Input = ({
	type,
	placeholder,
	labelName,
	maxLength,
	onChange,
	className,
	...restProps
}) => {
	return (
		<label className={classnames('customInput', className)}>
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
	className: PropTypes.string,
};
Input.defaultProps = {
	type: 'text',
	placeholder: '',
	labelName: null,
	maxLength: 30,
	onChange: null,
	className: null,
};
