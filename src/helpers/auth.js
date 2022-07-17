export class Authority {
	constructor() {
		this.key = 'auth';
		this._data = JSON.parse(localStorage.getItem(this.key));
	}
	setToken(token) {
		localStorage.setItem(this.key, JSON.stringify({ token }));
	}
	checkIsAuthorityTokenExist() {
		if (!this._data) return false;
		if (!this._data.token) return false;
		return true;
	}

	getToken() {
		return !this._data ? '' : this._data.token;
	}

	removeToken() {
		localStorage.removeItem(this.key);
	}
}
export const authority = new Authority();
