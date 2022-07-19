const getAuthData = (state) => state.userReducer;
const getRole = (state) => state.userReducer.role;
const getRegistrationData = (state) => ({
	registerSuccess: state.userReducer.registerSuccess,
	registerError: state.userReducer.registerError,
});

const getAuthors = (state) => state.authorsReducer.authors;

const getCourses = (state) => state.coursesReducer.courses;

export { getAuthData, getRegistrationData, getAuthors, getRole, getCourses };
