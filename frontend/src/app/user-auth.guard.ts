import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './auth.service';


@Injectable()
export class UserAuthGuard implements CanActivate {
	constructor(private router: Router) {
	}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
		if (!AuthService.getLoggedUser() && route.routeConfig.path !== 'login') {
			this.router.navigate(['login']);
			return false;
		}

		if (AuthService.getLoggedUser() && route.routeConfig.path === 'login') {
			this.router.navigate(['home']);
		}

		if (!AuthService.hasPermission() && route.routeConfig.path === 'produtos') {
			this.router.navigate(['home']);
			return false;
		}

		return true;
	}
}
