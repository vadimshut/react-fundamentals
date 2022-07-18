import { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import {
	BUTTON_NAMES,
	ERROR_MESSAGES,
	PLACEHOLDERS,
} from '../../../../constants';

import { Input } from '../../../../common/Input/Input';
import { Button } from '../../../../common/Button/Button';

import './add-author.scss';
import { useDispatch } from 'react-redux';

export const AddAuthor = ({ onClick }) => {
	const [name, setName] = useState('');
	const [isError, setIsError] = useState(false);
	const dispatch = useDispatch();

	const handleChange = (e) => {
		setName(e.target.value);
	};

	const handleClick = (e) => {
		e.preventDefault();
		if (name.trim().length < 3) {
			setIsError(true);
			return;
		}
		const id = uuidv4();
		onClick({ id, name });
		// dispatch(addAuthors({ name, id }));
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

AddAuthor.propTypes = {
	onClick: PropTypes.func.isRequired,
};
