class UsersService {
	constructor() {
		this.baseUrl = 'http://localhost:4000';
		this.baseHeaders = {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
		};
	}

	async login(endpoint, body) {
		const response = await fetch(`${this.baseUrl}/${endpoint}`, {
			method: 'POST',
			headers: this.baseHeaders,
			body: body,
		});
		const { result } = await response.json();

		this.token = result;
		return response;
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

export const usersService = new UsersService();
