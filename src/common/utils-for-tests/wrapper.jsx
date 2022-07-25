import { Provider } from 'react-redux';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { mockedStore } from './mockStore';
import { render } from '@testing-library/react';

export const Wrapper = ({ children }) => (
	<Provider store={mockedStore}>
		<BrowserRouter>{children}</BrowserRouter>
	</Provider>
);

export const renderWithRouter = (component) =>
	render(
		<Provider store={mockedStore}>
			<BrowserRouter>{component}</BrowserRouter>
		</Provider>
	);
