import {Component} from '@angular/core';
import {AuthService} from '../../auth.service';
import LoggedUser from '../../models/logged-user.model';
import {default as swal} from 'sweetalert2';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
	providers: [AuthService]
})
export class LoginComponent {

	protected token: string;
	protected login = {
		username: null,
		password: null
	};

	constructor(private authService: AuthService, private http: HttpClient) {
	}

	signin() {
		if (!this.login.username) {
			swal('Atenção', 'Informe um e-mail para fazer login.', 'warning');
		} else if (!this.login.password) {
			swal('Atenção', 'Informe uma senha para fazer login.', 'warning');
		} else {
			this.authService.sendCredentials(this.login.username, this.login.password)
				.subscribe(success => {
					this.token = success.token;
					const logged: LoggedUser = new LoggedUser(null, success.token);
					AuthService.setLoggedUser(logged);
					this.getCompleteUser();
				}, error => {
					if (error.status === 401) {
						swal('Acesso negado!', 'Login e/ou senha inválidos. Tente novamente.', 'error');
					}
				});
		}
	}

	/**
	 * Purpose: Recupera o objeto usuário utilizando o email e salva os dados deste no localStorage
	 */
	getCompleteUser() {
		this.http.get(`${environment.api}/users?email=${this.login.username}`).subscribe(success => {
			const user: any = success[0];
			const logged: LoggedUser = new LoggedUser(user.name, this.token, user.roles);
			AuthService.setLoggedUser(logged);
			location.href = '/home';
		});
	}
}
