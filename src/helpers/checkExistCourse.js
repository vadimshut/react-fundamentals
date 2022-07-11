export const checkExistCourse = (courseId, coursesList) => {
	return !!coursesList.find(({ id }) => id === courseId);
};
