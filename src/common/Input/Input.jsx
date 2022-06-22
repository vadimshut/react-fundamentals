import PropTypes from 'prop-types';
import classnames from 'classnames';

import './input.scss';
import { Error } from '../Error/Error';

export const Input = ({
	type,
	placeholder,
	labelName,
	maxLength,
	onChange,
	className,
	isError,
	value,
	...restProps
}) => {
	return (
		<label className={classnames('customInput', className)}>
			{labelName && (
				<div>
					{labelName}{' '}
					{isError && (
						<Error erorDescription='Author name should be more than 2 characters' />
					)}
				</div>
			)}
			<input
				type={type}
				className='input'
				placeholder={placeholder}
				value={value}
				maxLength={maxLength}
				onChange={onChange}
				{...restProps}
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
	value: PropTypes.string,
};
Input.defaultProps = {
	type: 'text',
	placeholder: '',
	labelName: null,
	maxLength: 30,
	onChange: null,
	className: null,
	value: '',
};
