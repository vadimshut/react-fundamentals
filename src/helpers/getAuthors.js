export const getAuthors = (idList, authorsData) => {
	return authorsData.reduce((acc, { id, name }) => {
		return idList.includes(id) ? `${acc} ${name}` : acc;
	}, '');
};
