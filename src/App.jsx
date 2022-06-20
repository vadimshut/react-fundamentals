import { Header } from './components/Header/Header';

import './App.css';
import { Courses } from './components/Courses/Courses';

function App() {
	return (
		<div className='app'>
			<Header />
			<Courses />
		</div>
	);
}

export default App;
