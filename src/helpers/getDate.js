export const getDate = () => {
	return new Date().toISOString().split('T')[0].split('-').reverse().join('/');
};
