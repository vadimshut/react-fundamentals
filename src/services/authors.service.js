class AuthorsService {
	constructor() {
		this.baseUrl = 'http://localhost:4000/authors';
	}

	async getAllAuthors(endpoint) {
		return await fetch(`${this.baseUrl}/${endpoint}`, {
			method: this.GET,
			headers: this.baseHeaders,
		});
	}
}

export const authorsService = new AuthorsService();
