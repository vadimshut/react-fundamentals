export class Auth {
	constructor() {
		this._data = JSON.parse(localStorage.getItem('auth'));
	}
	static setAuthorization(token) {
		localStorage.setItem('auth', JSON.stringify({ token }));
	}
	checkAuthorization() {
		if (!this._data) return false;
		if (!this._data.token) return false;
		return true;
	}

	getToken() {
		return !this._data ? '' : this._data.token;
	}

	static logout() {
		localStorage.removeItem('auth');
	}
}
