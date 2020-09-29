import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const currentUser = this.authService.currentUserValue;
    if (currentUser.isNeedToChangePassword) {
      this.router.navigate(['/auth/change-password']);
      return false;
    }
    if (currentUser) {
      return true;
    }
    this.router.navigate(['/auth/login']);
    return false;
  }
}
