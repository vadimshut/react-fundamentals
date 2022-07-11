export class Auth {
	constructor() {
		this._data = JSON.parse(localStorage.getItem('auth'));
	}
	static setAuthorization(data) {
		const name = data.user.name;
		const token = data.result;
		localStorage.setItem('auth', JSON.stringify({ token, name }));
	}
	checkAuthorization() {
		if (!this._data) return false;
		if (!this._data.token) return false;
		return true;
	}

	getUserName() {
		return !this._data ? '' : this._data.name;
	}

	static logout() {
		localStorage.removeItem('auth');
	}
}
