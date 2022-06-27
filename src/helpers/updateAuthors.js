export const updateAuthors = (oldAuthors, newAuthors) => {
	const oldAuthorsIds = oldAuthors.map(({ id }) => id);
	return newAuthors.filter(({ id }) => !oldAuthorsIds.includes(id));
};
