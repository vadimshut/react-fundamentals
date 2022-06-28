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

export const mockedCoursesList = [
	{
		id: 'de5aaa59-90f5-4dbc-b8a9-aaf205c551ba',
		title: 'JavaScript',
		description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
                    has been the industry's standard dummy text ever since the 1500s, when an unknown 
                    printer took a galley of type and scrambled it to make a type specimen book. It has survived 
                    not only five centuries, but also the leap into electronic typesetting, remaining essentially u
                    nchanged.`,
		creationDate: '08/03/2021',
		duration: 160,
		authors: [
			'27cc3006-e93a-4748-8ca8-73d06aa93b6d',
			'f762978b-61eb-4096-812b-ebde22838167',
		],
	},
	{
		id: 'b5630fdd-7bf7-4d39-b75a-2b5906fd0916',
		title: 'Angular',
		description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
                    has been the industry's standard dummy text ever since the 1500s, when an unknown 
                    printer took a galley of type and scrambled it to make a type specimen book.`,
		creationDate: '10/11/2020',
		duration: 210,
		authors: [
			'df32994e-b23d-497c-9e4d-84e4dc02882f',
			'095a1817-d45b-4ed7-9cf7-b2417bcbf748',
		],
	},
];

export const mockedAuthorsList = [
	{
		id: '27cc3006-e93a-4748-8ca8-73d06aa93b6d',
		name: 'Vasiliy Dobkin',
	},
	{
		id: 'f762978b-61eb-4096-812b-ebde22838167',
		name: 'Nicolas Kim',
	},
	{
		id: 'df32994e-b23d-497c-9e4d-84e4dc02882f',
		name: 'Anna Sidorenko',
	},
	{
		id: '095a1817-d45b-4ed7-9cf7-b2417bcbf748',
		name: 'Valentina Larina',
	},
];
