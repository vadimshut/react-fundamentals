import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import { ROUTES } from './constants';
import { fetchAllCourses } from './store/courses/coureses.actions';
import { fetchAllAuthors } from './store/authors/authors.actions';

import { Login } from './components/Login/Login';
import { Registration } from './components/Registration/Registration';
import { Courses } from './components/Courses/Courses';
import { CreateCourse } from './components/CreateCourse/CreateCourse';

import { RequireAuth } from './common/Decorator/RequireAuth';
import { CourseInfo } from './components/CourseInfo/CourseInfo';
import { Page404 } from './components/Page404/Page404';

function App() {
	// const dispatch = useDispatch();

	// useEffect(() => {
	// 	dispatch(fetchAllCourses());
	// 	dispatch(fetchAllAuthors());
	// }, [dispatch]);

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
							<CreateCourse />
						</RequireAuth>
					}
				/>

				<Route />

				<Route path='*' element={<Page404 />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
