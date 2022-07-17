export const BUTTON_NAMES = {
	logout: 'Logout',
	showCourse: 'Show course',
	search: 'Search',
	addCourse: 'Add new course',
	createCourse: 'Create course',
	createAuthor: 'Create author',
	addAuthor: 'Add author',
	deleteAuthor: 'Delete author',
};

export const ERROR_MESSAGES = {
	notEmpty: 'Field should not be empty.',
	moreThan: 'Should contain more than 2 values',
	moreThanZero: 'Value should bore than 0.',
	moreThanOneAuthor: 'Should contain 1 or more authors.',
	globalAlert: 'Please, fill in all fields',
	logError:
		'Before logging in as a new user, log out with the previous account',
};

export const PLACEHOLDERS = {
	search: 'Enter course name or id...',
	courseTitle: 'Enter course title...',
	createAuthorName: 'Enter author name...',
	duration: 'Enter duration in minutes...',
};

export const USE_REDUCER_TYPES = {
	SET_ERROR: 'setError',
	RESET_ERROR: 'resetError',
	SET_NAME: 'setName',
	SET_EMAIL: 'setEmail',
	SET_PASSWORD: 'setPassword',
	RESET_FORM: 'resetForm',
};

export const ENDPOINTS = {
	LOGIN: 'login',
	REGISTRATION: 'register',
};

export const REQUEST_METHODS = {
	GET: 'GET',
	POST: 'POST',
};

export const ROUTES = {
	ROOT: '/',
	LOGIN: '/login',
	REGISTRATION: '/registration',
	COURSES: '/courses',
	ADD_COURSE: '/courses/add',
	COURSE_ID: '/courses/:courseId',
};
