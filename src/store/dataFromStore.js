const getAuthData = (state) => state.userReducer;

const getRegistrationData = (state) => ({
	registerSuccess: state.userReducer.registerSuccess,
	registerError: state.userReducer.registerError,
});

const getAuthors = (state) => state.authorsReducer.authors;
const getNewAuthor = (state) => state.authorsReducer.newAuthor;

export { getAuthData, getRegistrationData, getAuthors, getNewAuthor };
