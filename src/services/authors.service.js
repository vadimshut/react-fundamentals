import { authorityTokenService } from './AuthorityTokenService';

class AuthorsService {
	constructor(authorityTokenService) {
		this.baseUrl = 'http://localhost:4000/authors';
		this.baseHeaders = {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
		};
		this.authorityTokenService = authorityTokenService;
	}

	async getAllAuthors(endpoint) {
		return await fetch(`${this.baseUrl}/${endpoint}`, {
			method: 'GET',
			headers: this.baseHeaders,
		});
	}

	async addAuthor(endpoint, body) {
		return await fetch(`${this.baseUrl}/${endpoint}`, {
			method: 'POST',
			headers: {
				...this.baseHeaders,
				Authorization: this.authorityTokenService.getToken(),
			},
			body: body,
		});
	}
}

export const authorsService = new AuthorsService(authorityTokenService);
