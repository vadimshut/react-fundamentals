export class AuthorityTokenService {
	constructor() {
		this.key = 'auth';
		this.token = '';
	}
	setToken(token) {
		localStorage.setItem(this.key, JSON.stringify({ token }));
		this.token = token;
	}

	checkIsAuthorityTokenExist() {
		const authorityObject = JSON.parse(localStorage.getItem(this.key));
		return !!authorityObject && !!authorityObject.token;
	}

	getToken() {
		const authorityObject = JSON.parse(localStorage.getItem(this.key));
		return !authorityObject ? '' : authorityObject.token;
	}

	removeToken() {
		localStorage.removeItem(this.key);
		this.token = '';
	}
}
export const authorityTokenService = new AuthorityTokenService();
