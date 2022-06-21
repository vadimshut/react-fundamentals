import './add-duration.scss';
import { Input } from '../../../../common/Input/Input';
import { PLACEHOLDERS } from '../../../../constants';
import { getCourseDuration } from '../../../../helpers/getCourseDuration';
import { useState } from 'react';

export const AddDuration = () => {
	const [duration, setDuration] = useState('');

	const handlechange = (e) => {
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
				onChange={handlechange}
				min={0}
			/>
			<div className='transformedDuration'>
				Duration <b>{transformedDuration}</b> hours
			</div>
		</div>
	);
};
