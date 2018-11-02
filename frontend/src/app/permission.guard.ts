import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';


@Injectable()
export class PermissionGuard implements CanActivate {
	constructor(private router: Router) {
	}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let hasPlayer = !!JSON.parse(localStorage.getItem('currentPlayer'));
        if(!hasPlayer) {
            this.router.navigate(['/user']);
            return false;
        }
        return true;
	}
}