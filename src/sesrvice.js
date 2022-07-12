class ApiService {
	GET = 'GET';
	POST = 'POST';
	constructor() {
		this.baseUrl = 'http://localhost:4000';
		this.contentType = 'application/json';
	}

	async getAllCourses(endpoint) {
		return await fetch(`${this.baseUrl}/${endpoint}`, {
			method: this.GET,
			headers: {
				'Content-Type': this.contentType,
			},
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
