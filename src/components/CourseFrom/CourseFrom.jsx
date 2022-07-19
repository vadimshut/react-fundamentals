import { useCallback, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { BUTTON_NAMES, ERROR_MESSAGES, PLACEHOLDERS } from '../../constants';

import { getAuthors } from '../../store/dataFromStore';
import { checkValidate } from '../../helpers/checkValidate';
import { createNewCourse } from '../../helpers/createNewCourse';

import { PageDecorator } from '../../common/Decorator/PageDecorator';
import { Button } from '../../common/Button/Button';
import { Input } from '../../common/Input/Input';
import { AddAuthor } from './components/AddAuthor/AddAuthor';
import { AddDuration } from './components/AddDuration/AddDuration';
import { Authors } from './components/Authors/Authors';
import { DescriptionInput } from './components/DescriptionInput/DescriptionInput';

import './course-from.scss';

export const CourseFrom = () => {
	// const navigate = useNavigate();
	const authorsList = useSelector(getAuthors);

	const [selectedAuthors, setSelectedAuthors] = useState([]);
	const [error, setError] = useState(false);
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [duration, setDuration] = useState('');

	const availableAuthors = useMemo(() => {
		return authorsList.filter(({ id }) => !selectedAuthors.map(({ id }) => id).includes(id));
	}, [authorsList, selectedAuthors]);

	const handleAddRemoveAuthor = useCallback(
		({ id, name, action }) => {
			action === 'add'
				? setSelectedAuthors([...selectedAuthors, { id, name }])
				: setSelectedAuthors(selectedAuthors.filter((author) => author.id !== id));
		},
		[selectedAuthors]
	);

	const handleChangeTitle = useCallback((e) => {
		setTitle(e.target.value);
	}, []);

	const handleChangeDuration = useCallback((e) => {
		setDuration(e.target.value);
	}, []);

	const handleChangeDescription = useCallback((e) => {
		setDescription(e.target.value);
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		const isValidated = checkValidate(title, description, duration, selectedAuthors);
		if (!isValidated) {
			setError(true);
			alert(ERROR_MESSAGES.globalAlert);
			return;
		}
		// const newCourse = createNewCourse(title, description, duration, newAuthorsIds);
		// navigate('/courses', { replace: true });
	};

	return (
		<PageDecorator>
			<form className='container' id='formId' onSubmit={handleSubmit}>
				<div className='titleNewCourse'>
					<Input
						placeholder={PLACEHOLDERS.courseTitle}
						labelName='Title: '
						onChange={handleChangeTitle}
						value={title}
						isError={error && (!title || title.length < 2)}
						errorMessage={`${ERROR_MESSAGES.notEmpty} ${ERROR_MESSAGES.moreThan}`}
					/>
				</div>
				<div className='buttonCreateCourse'>
					<Button buttonName={BUTTON_NAMES.createCourse} form='formId' />
				</div>
				<div className='descriptionNewCourse'>
					<DescriptionInput
						labelName='Description: '
						value={description}
						onChange={handleChangeDescription}
						isError={error && (!description || description.length < 2)}
						errorMessage={`${ERROR_MESSAGES.notEmpty} ${ERROR_MESSAGES.moreThan}`}
					/>
				</div>
				<div className='addNewAuthor'>
					<AddAuthor />
				</div>
				<div className='selectAuthors'>
					<Authors authorsList={availableAuthors} authorsTitle='Authors' onClick={handleAddRemoveAuthor} />
				</div>
				<div className='enterDuration'>
					<AddDuration
						onChange={handleChangeDuration}
						duration={duration}
						isError={error && !+duration}
						errorMessage={`${ERROR_MESSAGES.notEmpty} ${ERROR_MESSAGES.moreThanZero}`}
					/>
				</div>
				<div className='availableCourseAuthors'>
					<Authors
						authorsList={selectedAuthors}
						authorsTitle='Course author'
						buttonAction='delete'
						onClick={handleAddRemoveAuthor}
						isError={error && !selectedAuthors.length}
						errorMessage={`${ERROR_MESSAGES.notEmpty} ${ERROR_MESSAGES.moreThanOneAuthor}`}
					/>
				</div>
			</form>
		</PageDecorator>
	);
};
