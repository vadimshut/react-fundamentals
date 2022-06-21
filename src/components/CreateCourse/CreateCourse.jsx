import { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../../common/Button/Button';
import { BUTTON_NAMES, PLACEHOLDERS } from '../../constants';
import { Input } from '../../common/Input/Input';
import { DescriptionInput } from './components/DescriptionInput/DescriptionInput';

import './create-course.scss';
import { AddAuthor } from './components/AddAuthor/AddAuthor';

const ModalBackground = styled.div`
	position: absolute;
	z-index: 1;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	overflow: auto;
	background-color: rgba(0, 0, 0, 0.5);
`;

const ModalBody = styled.div`
	width: 100%;
	background-color: white;
	//margin: 10% auto;
	//padding: 20px;
`;

export const CreateCourse = ({ children }) => {
	const [shouldShow, setShouldShow] = useState(false);

	return (
		<>
			<Button
				buttonName={BUTTON_NAMES.addCourse}
				onClick={() => setShouldShow(true)}
			/>
			{shouldShow && (
				<ModalBackground onClick={() => setShouldShow(false)}>
					<ModalBody onClick={(e) => e.stopPropagation()}>
						<div className='container'>
							<div className='titleNewCourse'>
								<Input
									placeholder={PLACEHOLDERS.courseTitle}
									labelName='Title: '
								/>
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
							<div className='selectAuthors'></div>
							<div className='enterDuration'></div>
							<div className='availableCourseAuthors'></div>
						</div>
					</ModalBody>
				</ModalBackground>
			)}
		</>
	);
};
