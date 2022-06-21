import PropTypes from 'prop-types';

import './description-input.scss';

export const DescriptionInput = ({ labelName, onChange }) => {
	return (
		<label className='descriptionTextArea row2'>
			{labelName && <div>{labelName}</div>}
			<textarea className='textarea' onChange={onChange} />
		</label>
	);
};

DescriptionInput.propTypes = {
	labelName: PropTypes.string,
	onChange: PropTypes.func,
};

DescriptionInput.defaultProps = {
	labelName: null,
	onChange: null,
};
