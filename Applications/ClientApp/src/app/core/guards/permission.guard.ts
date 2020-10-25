import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PermissionGuard implements CanActivate {

  constructor() { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    return route.data?.expectedPermission;
  }
}
