import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { decode } from 'punycode';
import { AuthService } from '../modules/auth/shared/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate {

  constructor(public auth: AuthService, public router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    let checkRole = false;
    const expectedRole = route.data.expectedRole;
    const currentRole = this.auth.decodeToken('http://schemas.microsoft.com/ws/2008/06/identity/claims/role');
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < expectedRole.length; i++) {
      if (expectedRole[i] === currentRole) {
        checkRole = true;
        break;
      }
    }
    if (currentRole || !checkRole) {
      this.router.navigate(['401']);
      return false;
    }
    return true;
  }
}
