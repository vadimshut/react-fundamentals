const BASE_URL = 'http://localhost:4000';

export const Fetch = async (endpoint, method = 'GET', body = null) => {
	return await fetch(`${BASE_URL}/${endpoint}`, {
		method,
		headers: {
			'Content-Type': 'application/json',
		},
		body,
	});
};
