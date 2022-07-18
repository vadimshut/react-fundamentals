import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import { ROUTES } from './constants';

import { Login } from './components/Login/Login';
import { Registration } from './components/Registration/Registration';
import { Courses } from './components/Courses/Courses';

// import { RequireAuth } from './common/Decorator/RequireAuth';
// import { CourseInfo } from './components/CourseInfo/CourseInfo';
import { Page404 } from './components/Page404/Page404';
import { RequireAuth } from './common/Decorator/RequireAuth';
import { CoursesRoutePage } from './components/CoursesRoutePage/CoursesRoutePage';
import { CourseFrom } from './components/CourseFrom/CourseFrom';
import { CourseInfo } from './components/CourseInfo/CourseInfo';
// import { CourseFrom } from './components/CourseFrom/CourseFrom';

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
						<RequireAuth>
							<CoursesRoutePage />
						</RequireAuth>
					}
				>
					<Route
						path={ROUTES.COURSES_LIST}
						element={
							<RequireAuth>
								<Courses />
							</RequireAuth>
						}
					/>

					<Route
						path={ROUTES.ADD_COURSE}
						element={
							<RequireAuth>
								<CourseFrom />
							</RequireAuth>
						}
					/>

					<Route
						path={ROUTES.COURSE_INFO_ID}
						element={
							<RequireAuth>
								<CourseInfo />
							</RequireAuth>
						}
					/>
				</Route>
				<Route path='*' element={<Page404 />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
