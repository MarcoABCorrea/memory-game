import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import LoggedUser from '../models/logged-user.model';

@Injectable()
export class Interceptor implements HttpInterceptor {

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		const user = <LoggedUser> JSON.parse(localStorage.getItem('awesomeUser'));

		if (user) {
			request = request.clone({
				setHeaders: {
					Authorization: `Bearer ${user.token}`
				}
			});
		}
		return next.handle(request);
	}
}
