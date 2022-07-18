import { authorityTokenService } from './AuthorityTokenService';

class UsersService {
	constructor(authorityTokenService) {
		this.baseUrl = 'http://localhost:4000';
		this.baseHeaders = {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
		};
		this.authorityTokenService = authorityTokenService;
	}

	async login(endpoint, body) {
		try {
			const response = await fetch(`${this.baseUrl}/${endpoint}`, {
				method: 'POST',
				headers: this.baseHeaders,
				body: body,
			});
			const result = await response.json();
			this.authorityTokenService.setToken(result.result);
			return { status: response.ok, result };
		} catch (e) {
			return { status: false, result: { errors: [e.message] } };
		}
	}

	async registration(endpoint, body) {
		return await fetch(`${this.baseUrl}/${endpoint}`, {
			method: 'POST',
			headers: this.baseHeaders,
			body: body,
		});
	}

	async usersMe(endpoint) {
		return await fetch(`${this.baseUrl}/${endpoint}`, {
			method: 'GET',
			headers: {
				...this.baseHeaders,
				Authorization: this.token,
			},
		});
	}
}

export const usersService = new UsersService(authorityTokenService);
