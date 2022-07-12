import { Auth } from './helpers/auth';

class ApiService {
	GET = 'GET';
	POST = 'POST';
	constructor() {
		this.baseUrl = 'http://localhost:4000';
		this.contentType = 'application/json';
		this.token = new Auth().getToken();
	}

	async getAllCourses(endpoint) {
		return await fetch(`${this.baseUrl}/${endpoint}`, {
			method: this.GET,
			headers: {
				'Content-Type': this.contentType,
			},
		});
	}

	async addNewCourse(endpoint, body) {
		return await fetch(`${this.baseUrl}/${endpoint}`, {
			method: this.POST,
			headers: {
				'Content-Type': 'application/json;charset=utf-8',
				'Access-Control-Allow-Origin': '*',
				Authorization: this.token,
			},
			body: body,
		});
	}

	async getAllAuthors(endpoint) {
		return await fetch(`${this.baseUrl}/${endpoint}`, {
			method: this.GET,
			headers: {
				'Content-Type': this.contentType,
			},
		});
	}
}

export const apiService = new ApiService();
