import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../../auth/core/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(public auth: AuthService, public router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    let checkRole = false;
    const expectedRole = route.data.expectedRole;
    const currentRole = this.auth.getUserRole();
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < expectedRole.length; i++) {
      if (expectedRole[i] === currentRole) {
        checkRole = true;
        break;
      }
    }
    if (!currentRole || !checkRole) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
}
