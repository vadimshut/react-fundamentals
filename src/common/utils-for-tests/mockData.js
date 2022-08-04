export const mockedState = {
	userReducer: {
		isAuth: true,
		name: 'Vadim',
		role: 'admin',
	},
	coursesReducer: {
		courses: [
			{
				title: 'title',
				description: 'description',
				creationDate: '9/3/2021',
				duration: 30,
				authors: ['9b87e8b8-6ba5-40fc-a439-c4e30a373d36'],
				id: '66cc289e-6de9-49b2-9ca7-8b4f409d6467',
			},
			{
				title: ' NodeJS Global Mentoring',
				description: 'Cross-country global mentoring program which aims at improving the following skills',
				duration: 750,
				creationDate: '20/07/2022',
				authors: [
					'9b87e8b8-6ba5-40fc-a439-c4e30a373d36',
					'1c972c52-3198-4098-b6f7-799b45903199',
					'072fe3fc-e751-4745-9af5-aa9eed0ea9ed',
				],
				id: 'e4890f09-ffaf-43ce-aa56-ac84e7ceb529',
			},
		],
		courseForUpdate: {},
	},
	authorsReducer: {
		authors: [
			{
				name: 'author',
				id: '9b87e8b8-6ba5-40fc-a439-c4e30a373d36',
			},
			{
				name: 'author2',
				id: '1c972c52-3198-4098-b6f7-799b45903199',
			},
			{
				name: 'author3',
				id: '072fe3fc-e751-4745-9af5-aa9eed0ea9ed',
			},
		],
	},
};
