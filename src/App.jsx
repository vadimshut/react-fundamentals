import { useCallback, useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import { mockedAuthorsList, mockedCoursesList, ROUTES } from './constants';

import { Login } from './components/Login/Login';
import { Registration } from './components/Registration/Registration';
import { Courses } from './components/Courses/Courses';
import { CreateCourse } from './components/CreateCourse/CreateCourse';

import { updateAuthors } from './helpers/updateAuthors';
import { RequireAuth } from './common/Decorator/RequireAuth';
import { CourseInfo } from './components/CourseInfo/CourseInfo';
import { Page404 } from './components/Page404/Page404';

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
				<Route path={ROUTES.ROOT} element={<Navigate to={ROUTES.COURSES} />} />
				<Route path={ROUTES.LOGIN} element={<Login />} />
				<Route path={ROUTES.REGISTRATION} element={<Registration />} />
				<Route
					path={ROUTES.COURSES}
					element={
						<RequireAuth>
							<Courses coursesList={courses} authorsList={authors} />
						</RequireAuth>
					}
				/>
				<Route
					path={ROUTES.COURSE_ID}
					element={
						<RequireAuth>
							<CourseInfo coursesList={courses} authorsList={authors} />
						</RequireAuth>
					}
				/>
				<Route
					path={ROUTES.ADD_COURSE}
					element={
						<RequireAuth>
							<CreateCourse
								authorsList={authors}
								createNewCourse={createNewCourse}
							/>
						</RequireAuth>
					}
				/>

				{/*<Route path='*' element={<Navigate to={ROUTES.LOGIN} />} />*/}
				<Route path='*' element={<Page404 />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
