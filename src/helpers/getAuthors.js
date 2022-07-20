export const getAuthorsString = (idList, authorsData) => {
	return authorsData.reduce((acc, { id, name }) => {
		return idList.includes(id) ? `${acc} ${name}` : acc;
	}, '');
};

export const getAuthorsNameList = (idList, authorsData) => {
	return authorsData.reduce((acc, { id, name }) => {
		return idList.includes(id) ? [...acc, { id, name }] : acc;
	}, []);
};

export const getAuthorsFromAuthorsIds = (authorsList, authorsIds) => {
	return authorsList.reduce((acc, author) => {
		if (authorsIds.includes(author.id)) {
			acc.push(author);
		}
		return acc;
	}, []);
};
