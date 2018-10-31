import {Component, OnInit} from '@angular/core';
import LoggedUser from './models/logged-user.model';
import {Router} from '@angular/router';
import {AuthService} from './auth.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	private loggedUser: LoggedUser = new LoggedUser();
	private hasPermission = AuthService.hasPermission();

	ngOnInit() {
		this.loggedUser = AuthService.getLoggedUser();
	}

	constructor(private router: Router) {
	}

	public hasLoggedUser() {
		return this.loggedUser && this.loggedUser.name !== '' && this.loggedUser.token !== '';
	}

	public logout() {
		this.router.navigate(['login']);
		AuthService.removeLoggedUser();
		this.loggedUser = null;
	}
}
