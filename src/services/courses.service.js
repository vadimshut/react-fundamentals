class CoursesService {
	constructor() {
		this.baseUrl = 'http://localhost:4000/courses';
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

export const coursesService = new CoursesService();
