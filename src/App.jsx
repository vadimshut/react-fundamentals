import { Header } from './components/Header/Header';

import './App.css';
import { Courses } from './components/Courses/Courses';
import { mockedAuthorsList, mockedCoursesList } from './constants';

function App() {
	return (
		<div className='app'>
			<Header />
			<Courses
				coursesList={mockedCoursesList}
				authorsList={mockedAuthorsList}
			/>
		</div>
	);
}

export default App;
