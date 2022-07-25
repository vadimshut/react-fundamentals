import React, { useCallback, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { BUTTON_NAMES, ERROR_MESSAGES, PLACEHOLDERS, ROUTES } from '../../constants';
import { getAuthors } from '../../store/selectors';
import { checkValidate } from '../../helpers/checkValidate';
import { fetchAddCourse, fetchUpdateCourse } from '../../store/courses/coureses.actions';
import { createBody } from '../../helpers/createBody';
import { CourseFromContainer } from './components/CourseFormContainer';

import { Button } from '../../common/Button/Button';
import { Input } from '../../common/Input/Input';
import { AddAuthor } from './components/AddAuthor/AddAuthor';
import { AddDuration } from './components/AddDuration/AddDuration';
import { Authors } from './components/Authors/Authors';
import { DescriptionInput } from './components/DescriptionInput/DescriptionInput';

import './course-from.scss';

export const CourseFromUI = ({
	courseTitle,
	courseDescription,
	courseDuration,
	courseSelectedAuthors,
	buttonName,
	courseId,
}) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const authorsList = useSelector(getAuthors);

	const [selectedAuthors, setSelectedAuthors] = useState(courseSelectedAuthors);
	const [error, setError] = useState(false);
	const [title, setTitle] = useState(courseTitle);
	const [description, setDescription] = useState(courseDescription);
	const [duration, setDuration] = useState(courseDuration);

	useEffect(() => {
		setSelectedAuthors(courseSelectedAuthors);
		setTitle(courseTitle);
		setDescription(courseDescription);
		setDuration(courseDuration);
	}, [courseTitle, courseDescription, courseDuration, courseSelectedAuthors]);

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
		const authors = selectedAuthors.map(({ id }) => id);
		const body = createBody({ title, description, duration: +duration, authors });

		buttonName === BUTTON_NAMES.createCourse
			? dispatch(fetchAddCourse(body))
			: dispatch(fetchUpdateCourse({ id: courseId, body }));

		navigate(ROUTES.COURSES);
	};

	return (
		<form className='container' id='formId' role='form' onSubmit={handleSubmit}>
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
				<Button buttonName={buttonName} form='formId' />
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
	);
};

CourseFromUI.propTypes = {
	courseTitle: PropTypes.string,
	courseDescription: PropTypes.string,
	courseDuration: PropTypes.string,
	courseSelectedAuthors: PropTypes.array,
	buttonName: PropTypes.string,
	courseId: PropTypes.string,
};
CourseFromUI.defaultProps = {
	courseTitle: '',
	courseDescription: '',
	courseDuration: '',
	courseSelectedAuthors: [],
	buttonName: BUTTON_NAMES.createCourse,
	courseId: '',
};

export const CourseFrom = CourseFromContainer(CourseFromUI);
