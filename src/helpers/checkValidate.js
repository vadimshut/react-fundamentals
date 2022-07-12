export const checkValidate = (
	title,
	description,
	duration,
	selectedAuthors
) => {
	return !(
		!title ||
		title.length < 2 ||
		!description ||
		description.length < 2 ||
		!+duration ||
		!selectedAuthors.length
	);
};
