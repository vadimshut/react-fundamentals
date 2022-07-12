import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import { ROUTES } from './constants';

import { Login } from './components/Login/Login';
import { Registration } from './components/Registration/Registration';
import { Courses } from './components/Courses/Courses';
import { CreateCourse } from './components/CreateCourse/CreateCourse';

import { RequireAuth } from './common/Decorator/RequireAuth';
import { CourseInfo } from './components/CourseInfo/CourseInfo';
import { Page404 } from './components/Page404/Page404';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCourses } from './store/courses/courses';
import { fetchAllAuthors, getAuthors } from './store/authors/authors';

function App() {
	const authors = useSelector(getAuthors);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchAllCourses());
		dispatch(fetchAllAuthors());
	}, [dispatch]);

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
							<Courses />
						</RequireAuth>
					}
				/>
				<Route
					path={ROUTES.COURSE_ID}
					element={
						<RequireAuth>
							<CourseInfo />
						</RequireAuth>
					}
				/>
				<Route
					path={ROUTES.ADD_COURSE}
					element={
						<RequireAuth>
							<CreateCourse authorsList={authors} />
						</RequireAuth>
					}
				/>

				<Route path='*' element={<Page404 />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
