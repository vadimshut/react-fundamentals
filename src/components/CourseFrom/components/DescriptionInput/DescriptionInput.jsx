import PropTypes from 'prop-types';

import './description-input.scss';
import { Error } from '../../../../common/Error/Error';

export const DescriptionInput = ({ labelName, onChange, value, isError, errorMessage }) => {
	return (
		<label className='descriptionTextArea row2'>
			<div>
				{labelName} {isError && <Error erorDescription={errorMessage} />}
			</div>
			<textarea className='textarea' value={value} onChange={onChange} />
		</label>
	);
};

DescriptionInput.propTypes = {
	labelName: PropTypes.string,
	value: PropTypes.string,
	onChange: PropTypes.func,
	isError: PropTypes.bool,
	errorMessage: PropTypes.string,
};

DescriptionInput.defaultProps = {
	labelName: null,
	value: '',
	onChange: null,
	isError: false,
	errorMessage: '',
};
