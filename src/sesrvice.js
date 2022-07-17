import { Auth } from './helpers/auth';

class ApiService {
	GET = 'GET';
	POST = 'POST';
	PUT = 'PUT';
	DELETE = 'DELETE';

	constructor(Auth) {
		this.auth = new Auth();
		this.baseUrl = 'http://localhost:4000';
		this.baseHeaders = {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
		};
		this.token = this.auth.getToken();
	}

	async login(endpoint, body) {
		const response = await fetch(`${this.baseUrl}/${endpoint}`, {
			method: this.POST,
			headers: this.baseHeaders,
			body: body,
		});
		const { result } = await response.json();
		this.auth.setAuthorization(result);
		this.token = result;
		return response;
	}

	async registration(endpoint, body) {
		return await fetch(`${this.baseUrl}/${endpoint}`, {
			method: this.POST,
			headers: this.baseHeaders,
			body: body,
		});
	}

	async usersMe(endpoint) {
		return await fetch(`${this.baseUrl}/${endpoint}`, {
			method: this.GET,
			headers: {
				...this.baseHeaders,
				Authorization: this.token,
			},
		});
	}

	async getAllAuthors(endpoint) {
		return await fetch(`${this.baseUrl}/${endpoint}`, {
			method: this.GET,
			headers: this.baseHeaders,
		});
	}

	async getAllCourses(endpoint) {
		return await fetch(`${this.baseUrl}/${endpoint}`, {
			method: this.GET,
			headers: this.baseHeaders,
		});
	}

	async addNewCourse(endpoint, body) {
		return await fetch(`${this.baseUrl}/${endpoint}`, {
			method: this.POST,
			headers: {
				...this.baseHeaders,
				Authorization: this.token,
			},
			body: body,
		});
	}
}

export const apiService = new ApiService(Auth);
