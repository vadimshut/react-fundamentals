class AuthorsService {
	constructor() {
		this.baseUrl = 'http://localhost:4000/authors';
		this.baseHeaders = {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
		};
	}

	async getAllAuthors(endpoint) {
		return await fetch(`${this.baseUrl}/${endpoint}`, {
			method: 'GET',
			headers: this.baseHeaders,
		});
	}
}

export const authorsService = new AuthorsService();
