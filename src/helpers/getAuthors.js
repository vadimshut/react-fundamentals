export const getAuthors = (idList, authorsData) => {
	return authorsData.reduce((acc, { id, name }) => {
		return idList.includes(id) ? `${acc} ${name}` : acc;
	}, '');
};

export const getAuthorsNameList = (idList, authorsData) => {
	return authorsData.reduce((acc, { id, name }) => {
		return idList.includes(id) ? [...acc, { id, name }] : acc;
	}, []);
};
