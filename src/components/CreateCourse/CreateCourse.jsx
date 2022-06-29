import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes, { shape } from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { BUTTON_NAMES, ERROR_MESSAGES, PLACEHOLDERS } from '../../constants';

import { Button } from '../../common/Button/Button';
import { Input } from '../../common/Input/Input';
import { DescriptionInput } from './components/DescriptionInput/DescriptionInput';
import { AddAuthor } from './components/AddAuthor/AddAuthor';
import { AddDuration } from './components/AddDuration/AddDuration';
import { Authors } from './components/Authors/Authors';

import './create-course.scss';
import { getDate } from '../../helpers/getDate';
import { PageDecorator } from '../../common/Decorator/PageDecorator';

export const CreateCourse = ({ authorsList, createNewCourse }) => {
	const [error, setError] = useState(false);
	const [authors, setAuthors] = useState(authorsList);
	const [selectedAuthors, setSelectedAuthors] = useState([]);
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [duration, setDuration] = useState('');

	const navigate = useNavigate();

	const handleAddRemoveAuthor = useCallback(
		({ id, name, action }) => {
			if (action === 'add') {
				const updatedStateAuthors = authors.filter(
					(author) => author.id !== id
				);
				setAuthors(updatedStateAuthors);
				setSelectedAuthors([...selectedAuthors, { id, name }]);
				return;
			}
			const updatedStateSelectedAuthors = selectedAuthors.filter(
				(selectedAuthor) => selectedAuthor.id !== id
			);

			setSelectedAuthors(updatedStateSelectedAuthors);
			setAuthors([...authors, { id, name }]);
		},
		[authors, selectedAuthors]
	);

	const createNewAuthor = useCallback(
		(newAuthor) => {
			setAuthors([...authors, newAuthor]);
		},
		[authors]
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

	const isValidated = () => {
		if (
			!title ||
			title.length < 2 ||
			!description ||
			description.length < 2 ||
			!+duration ||
			!selectedAuthors.length
		)
			return false;
		return true;
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!isValidated()) {
			setError(true);
			alert(ERROR_MESSAGES.globalAlert);
			return;
		}

		const newAuthorsIds = selectedAuthors.map(({ id }) => id);
		const id = uuidv4();
		const creationDate = getDate();

		const newCourse = {
			id,
			title,
			description,
			creationDate,
			duration: +duration,
			authors: newAuthorsIds,
		};

		createNewCourse(newCourse, selectedAuthors);
		navigate('/courses', { replace: true });
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
					<AddAuthor onClick={createNewAuthor} />
				</div>
				<div className='selectAuthors'>
					<Authors
						authorsList={authors}
						authorsTitle='Authors'
						onClick={handleAddRemoveAuthor}
					/>
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

CreateCourse.propTypes = {
	createNewCourse: PropTypes.func,
	authorsList: PropTypes.arrayOf(
		shape({
			id: PropTypes.string,
			name: PropTypes.string,
		})
	),
};

CreateCourse.defaultProps = {
	createNewCourse: null,
	authorsList: [],
};
