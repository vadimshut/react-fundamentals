import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import { ROUTES } from './constants';

import { Login } from './components/Login/Login';
import { Registration } from './components/Registration/Registration';
import { Courses } from './components/Courses/Courses';

import { Page404 } from './components/Page404/Page404';
import { PrivateRoute } from './common/Decorator/PrivateRoute';
import { CoursesRoutePage } from './components/CoursesRoutePage/CoursesRoutePage';
import { CourseFrom } from './components/CourseFrom/CourseFrom';
import { CourseInfo } from './components/CourseInfo/CourseInfo';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={ROUTES.ROOT} element={<Navigate to={ROUTES.COURSES} />} />
				<Route path={ROUTES.LOGIN} element={<Login />} />
				<Route path={ROUTES.REGISTRATION} element={<Registration />} />
				<Route
					path={ROUTES.COURSES}
					element={
						<PrivateRoute>
							<CoursesRoutePage />
						</PrivateRoute>
					}
				>
					<Route
						path={ROUTES.COURSES_LIST}
						element={
							<PrivateRoute>
								<Courses />
							</PrivateRoute>
						}
					/>

					<Route
						path={ROUTES.ADD_COURSE}
						element={
							<PrivateRoute checkParameter='role'>
								<CourseFrom />
							</PrivateRoute>
						}
					/>

					<Route
						path={ROUTES.UPDATE_COURSE}
						element={
							<PrivateRoute checkParameter='role'>
								<CourseFrom />
							</PrivateRoute>
						}
					/>

					<Route
						path={ROUTES.COURSE_INFO_ID}
						element={
							<PrivateRoute>
								<CourseInfo />
							</PrivateRoute>
						}
					/>
				</Route>
				<Route path='*' element={<Page404 />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
