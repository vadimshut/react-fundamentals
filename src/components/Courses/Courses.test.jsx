import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Courses } from './Courses';
import { mockedStore } from '../../common/utils-for-tests/mockStore';
import { renderWithRouter, Wrapper } from '../../common/utils-for-tests/wrapper';
import { BUTTON_NAMES } from '../../constants';
import App from '../../App';

jest.mock('../../services/AuthorityTokenService', () => {
	return { authorityTokenService: { checkIsAuthorityTokenExist: () => true } };
});

describe('Courses component', () => {
	afterEach(cleanup);
	describe('Render elements in courses component', () => {
		it('should display amount of CourseCard equal length of courses array', () => {
			const { container } = render(<Courses />, { wrapper: Wrapper });
			const cards = container.querySelectorAll('.CourseCard');
			const cardsFromStore = mockedStore.getState().coursesReducer.courses;
			expect(cards.length).toBe(cardsFromStore.length);
		});
	});

	describe('Buttons click in courses component', () => {
		it('CourseForm should be showed after a click on a button "Add new course"', async () => {
			const user = userEvent.setup();
			renderWithRouter(<App />);
			const btnAddNewCourse = screen.getByText(BUTTON_NAMES.addCourse);
			await user.click(btnAddNewCourse);
			expect(screen.getByRole('form')).toBeInTheDocument();
		});
	});
});
