import { useCallback, useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import { mockedAuthorsList, mockedCoursesList } from './constants';

import { Login } from './components/Login/Login';
import { Registration } from './components/Registration/Registration';
import { Courses } from './components/Courses/Courses';
import { CreateCourse } from './components/CreateCourse/CreateCourse';

import { updateAuthors } from './helpers/updateAuthors';

function App() {
	const [courses, setCourses] = useState(mockedCoursesList);
	const [authors, setAuthors] = useState(mockedAuthorsList);

	const createNewCourse = useCallback(
		(newCourse, newAuthors) => {
			const newPersonToAuthors = updateAuthors(authors, newAuthors);
			setCourses([...courses, newCourse]);
			setAuthors([...authors, ...newPersonToAuthors]);
		},
		[authors, courses]
	);

	return (
		<BrowserRouter>
			<Routes>
				<Route path='/login' element={<Login />} />
				<Route path='/registration' element={<Registration />} />
				<Route
					path='/courses'
					element={<Courses coursesList={courses} authorsList={authors} />}
				/>
				{/*<Route path='/courses/:courseId' element={<App />} />*/}
				<Route
					path='/courses/add'
					element={
						<CreateCourse
							authorsList={authors}
							createNewCourse={createNewCourse}
						/>
					}
				/>

				<Route path='*' element={<Navigate to='/login' />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
