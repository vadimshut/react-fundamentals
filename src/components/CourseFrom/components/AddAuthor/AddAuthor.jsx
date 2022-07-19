import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { BUTTON_NAMES, ERROR_MESSAGES, PLACEHOLDERS } from '../../../../constants';

import { fetchAddAuthor } from '../../../../store/authors/authors.actions';
import { createBody } from '../../../../helpers/createBody';

import { Input } from '../../../../common/Input/Input';
import { Button } from '../../../../common/Button/Button';

import './add-author.scss';

export const AddAuthor = () => {
	const dispatch = useDispatch();
	const [name, setName] = useState('');
	const [isError, setIsError] = useState(false);

	const handleChange = (e) => {
		setName(e.target.value);
	};

	const handleClick = (e) => {
		e.preventDefault();
		if (name.trim().length < 3) {
			setIsError(true);
			return;
		}
		dispatch(fetchAddAuthor(createBody({ name })));
		setIsError(false);
		setName('');
	};

	return (
		<div className='addAuthorComponent'>
			<div className='title'>Add author</div>
			<Input
				placeholder={PLACEHOLDERS.createAuthorName}
				labelName='Author name: '
				className='input'
				onChange={handleChange}
				value={name}
				isError={isError}
				errorMessage={`${ERROR_MESSAGES.notEmpty} ${ERROR_MESSAGES.moreThan}`}
			/>
			<Button buttonName={BUTTON_NAMES.createAuthor} onClick={handleClick} />
		</div>
	);
};
