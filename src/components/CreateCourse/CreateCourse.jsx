import { useState } from 'react';
import PropTypes, { shape } from 'prop-types';
import { BUTTON_NAMES, PLACEHOLDERS } from '../../constants';

import { Button } from '../../common/Button/Button';
import { Input } from '../../common/Input/Input';
import { DescriptionInput } from './components/DescriptionInput/DescriptionInput';
import { AddAuthor } from './components/AddAuthor/AddAuthor';
import { AddDuration } from './components/AddDuration/AddDuration';
import { Authors } from './components/Authors/Authors';

import './create-course.scss';

export const CreateCourse = ({ coursesList, authorsList }) => {
	const [authors, setAuthors] = useState(authorsList);
	const [selectedAuthors, setSelectedAuthors] = useState([]);

	const handleAddRemoveAuthor = ({ id, name, action }) => {
		if (action === 'add') {
			const updatedStateAuthors = authors.filter((author) => author.id !== id);
			setAuthors(updatedStateAuthors);
			setSelectedAuthors([...selectedAuthors, { id, name }]);
			return;
		}
		const updatedStateSelectedAuthors = selectedAuthors.filter(
			(selectedAuthor) => selectedAuthor.id !== id
		);
		setSelectedAuthors(updatedStateSelectedAuthors);
		setAuthors([...authors, { id, name }]);
	};

	return (
		<div className='container'>
			<div className='titleNewCourse'>
				<Input placeholder={PLACEHOLDERS.courseTitle} labelName='Title: ' />
			</div>
			<div className='buttonCreateCourse'>
				<Button buttonName={BUTTON_NAMES.createCourse} />
			</div>
			<div className='descriptionNewCourse'>
				<DescriptionInput labelName='Description' />
			</div>
			<div className='addNewAuthor'>
				<AddAuthor />
			</div>
			<div className='selectAuthors'>
				<Authors
					authorsList={authors}
					authorsTitle='Authors'
					onClick={handleAddRemoveAuthor}
				/>
			</div>
			<div className='enterDuration'>
				<AddDuration />
			</div>
			<div className='availableCourseAuthors'>
				<Authors
					authorsList={selectedAuthors}
					authorsTitle='Course author'
					buttonAction='delete'
					onClick={handleAddRemoveAuthor}
				/>
			</div>
		</div>
	);
};

CreateCourse.propTypes = {
	coursesList: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string,
			title: PropTypes.string,
			description: PropTypes.string,
			creationDate: PropTypes.string,
			duration: PropTypes.number,
			authors: PropTypes.arrayOf(PropTypes.string),
		})
	),
	authorsList: PropTypes.arrayOf(
		shape({
			id: PropTypes.string,
			name: PropTypes.string,
		})
	),
};

CreateCourse.defaultProps = {
	coursesList: [],
	authorsList: [],
};
