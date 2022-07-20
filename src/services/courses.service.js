import { authorityTokenService } from './AuthorityTokenService';

class CoursesService {
	constructor(authorityTokenService) {
		this.baseUrl = 'http://localhost:4000/courses';
		this.baseHeaders = {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
		};
		this.authorityTokenService = authorityTokenService;
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
				Authorization: this.authorityTokenService.getToken(),
			},
			body: body,
		});
	}

	async deleteCourse(id) {
		return await fetch(`${this.baseUrl}/${id}`, {
			method: 'DELETE',
			headers: {
				...this.baseHeaders,
				Authorization: this.authorityTokenService.getToken(),
			},
		});
	}

	async getCourseById(id) {
		return await fetch(`${this.baseUrl}/${id}`, {
			method: 'GET',
			headers: this.baseHeaders,
		});
	}

	async updateCourse(id, body) {
		return await fetch(`${this.baseUrl}/${id}`, {
			method: 'PUT',
			headers: {
				...this.baseHeaders,
				Authorization: this.authorityTokenService.getToken(),
			},
			body: body,
		});
	}
}

export const coursesService = new CoursesService(authorityTokenService);
