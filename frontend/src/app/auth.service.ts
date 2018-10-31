import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {environment} from '../environments/environment';
import LoggedUser from './models/logged-user.model';
import {HttpClient} from '@angular/common/http';
import {Roles} from './enum/roles.enum';

@Injectable()
export class AuthService {

	email: string;
	password: string;

	constructor(private http: HttpClient) {
	}

	static getLoggedUser(): LoggedUser {
		const awesomeUser: string = localStorage.getItem('awesomeUser');
		return <LoggedUser> JSON.parse(awesomeUser);
	}

	static setLoggedUser(loggedUser: LoggedUser) {
		localStorage.setItem('awesomeUser', JSON.stringify(loggedUser));
	}

	static removeLoggedUser() {
		localStorage.removeItem('awesomeUser');
	}

	/**
	 * Purpose: User that contains role='SUPORT' is not allowed to see some contents
	 * @returns {boolean}
	 */
	static hasPermission() {
		const user: LoggedUser = AuthService.getLoggedUser();
		return user ? user.roles.indexOf(Roles[Roles.SUPORT]) === -1 : false;
	}

	sendCredentials(email: string, password: string): Observable<any> {

		this.email = email;
		this.password = password;

		return this.http.post(`${environment.api}/auth/login`, {
			'email': email,
			'password': password
		});
	}
}
