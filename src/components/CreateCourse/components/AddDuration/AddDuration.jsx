import { useState } from 'react';

import { PLACEHOLDERS } from '../../../../constants';

import { Input } from '../../../../common/Input/Input';
import { getCourseDuration } from '../../../../helpers/getCourseDuration';

import './add-duration.scss';

export const AddDuration = () => {
	const [duration, setDuration] = useState('');

	const handleChange = (e) => {
		setDuration(e.target.value);
	};

	const transformedDuration = getCourseDuration(duration);
	return (
		<div className='addDurationComponent'>
			<div className='title'>Duration</div>
			<Input
				type='number'
				placeholder={PLACEHOLDERS.duration}
				labelName='Duration: '
				className='input'
				onChange={handleChange}
				min={0}
			/>
			<div className='transformedDuration'>
				Duration <b>{transformedDuration}</b> hours
			</div>
		</div>
	);
};
