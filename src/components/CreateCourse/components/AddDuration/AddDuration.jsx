import PropTypes from 'prop-types';
import { PLACEHOLDERS } from '../../../../constants';

import { Input } from '../../../../common/Input/Input';
import { getCourseDuration } from '../../../../helpers/getCourseDuration';

import './add-duration.scss';

export const AddDuration = ({ duration, onChange, isError, errorMessage }) => {
	const transformedDuration = getCourseDuration(duration);
	return (
		<div className='addDurationComponent'>
			<div className='title'>Duration</div>
			<Input
				type='number'
				placeholder={PLACEHOLDERS.duration}
				labelName='Duration: '
				className='input'
				onChange={onChange}
				value={duration}
				min={0}
				isError={isError}
				errorMessage={errorMessage}
			/>
			<div className='transformedDuration'>
				Duration <b>{transformedDuration}</b> hours
			</div>
		</div>
	);
};

AddDuration.propTypes = {
	isError: PropTypes.bool,
	errorMessage: PropTypes.string,
};

AddDuration.defaultProps = {
	isError: false,
	errorMessage: '',
};
