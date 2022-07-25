import { render, screen, cleanup } from '@testing-library/react';
import { CourseCard } from './CourseCard';
import { Wrapper } from '../../../../common/utils-for-tests/wrapper';
import { getCourseDuration } from '../../../../helpers/getCourseDuration';

const props = {
	title: 'title',
	description: 'description',
	creationDate: '9/3/2021',
	duration: 30,
	authorsIdsList: ['9b87e8b8-6ba5-40fc-a439-c4e30a373d36'],
	authorsList: [
		{
			name: 'author',
			id: '9b87e8b8-6ba5-40fc-a439-c4e30a373d36',
		},
	],
	id: '66cc289e-6de9-49b2-9ca7-8b4f409d6467',
};

describe('<CourseCard />', () => {
	let courseCard;
	beforeEach(() => {
		const { container } = render(<CourseCard {...props} />, { wrapper: Wrapper });
		courseCard = container;
	});

	afterEach(cleanup);

	it('CourseCard should display title.', () => {
		const title = screen.getByRole('heading');
		expect(title).toBeInTheDocument();
	});

	it('CourseCard should display description.', () => {
		const description = screen.getByText(props.description);
		expect(description).toBeInTheDocument();
	});

	it('CourseCard should display duration in the correct format.', () => {
		const formattedDuration = getCourseDuration(props.duration);
		const duration = screen.getByText(`${formattedDuration} hours`);
		expect(duration).toBeInTheDocument();
		expect(duration.innerHTML).toBe('00:30 hours');
	});

	it('CourseCard should display authors list.', () => {
		const authorsString = courseCard.querySelector('.authors > span').innerHTML;
		const authorsLength = authorsString.trim().split(' ').length;
		expect(authorsLength).toBe(props.authorsList.length);
		expect(authorsString).toBe(' author');
	});

	it('CourseCard should display created date in the correct format.', () => {
		const createdDate = courseCard.querySelector('.created > span').innerHTML;
		expect(createdDate).toBe('9.3.2021');
	});
});
