class CoursesService {
	constructor() {
		this.baseUrl = 'http://localhost:4000/courses';
		this.baseHeaders = {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
		};
	}
	async getAllCourses(endpoint) {
		return await fetch(`${this.baseUrl}/${endpoint}`, {
			method: 'GET',
			headers: this.baseHeaders,
		});
	}

	async addNewCourse(endpoint, body) {
		return await fetch(`${this.baseUrl}/${endpoint}`, {
			method: 'POST',
			headers: {
				...this.baseHeaders,
				Authorization: this.token,
			},
			body: body,
		});
	}
}

export const coursesService = new CoursesService();
