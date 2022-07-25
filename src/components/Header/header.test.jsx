import { render, screen, cleanup } from '@testing-library/react';
import { Header } from './Header';
import { Wrapper } from '../../common/utils-for-tests/wrapper';

describe('<Header />', () => {
	beforeEach(() => {
		render(<Header />, { wrapper: Wrapper });
	});
	afterEach(cleanup);

	it('should contain logo', () => {
		const logo = screen.getByAltText('epam logo');
		expect(logo).toBeInTheDocument();
	});

	it('user name should be exist', () => {
		const name = screen.getByTestId('userName');
		expect(name).toBeInTheDocument();
	});
});
