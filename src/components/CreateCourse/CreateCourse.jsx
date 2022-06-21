import { BUTTON_NAMES, mockedAuthorsList, PLACEHOLDERS } from '../../constants';

import { Button } from '../../common/Button/Button';
import { Input } from '../../common/Input/Input';
import { DescriptionInput } from './components/DescriptionInput/DescriptionInput';
import { AddAuthor } from './components/AddAuthor/AddAuthor';
import { AddDuration } from './components/AddDuration/AddDuration';
import { Authors } from './components/Authors/Authors';

import './create-course.scss';

export const CreateCourse = () => {
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
				<Authors authorsList={mockedAuthorsList} authorsTitle='Authors' />
			</div>
			<div className='enterDuration'>
				<AddDuration />
			</div>
			<div className='availableCourseAuthors'>
				<Authors
					authorsList={mockedAuthorsList}
					authorsTitle='Course author'
					buttonAction='delete'
				/>
			</div>
		</div>
	);
};
