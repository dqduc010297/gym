import { Injectable } from '@angular/core';
import { LoginUser } from './models/login.user';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ChangePasswordRequest } from './models/change-password.request';
import jwt_decode from 'jwt-decode';
import { AuthAPIService } from './auth.api.service';
import { LoginRequest } from './models/login.request';
import { PermissionService } from './permission.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  loginUser: LoginUser;

  constructor(
    private authAPIService: AuthAPIService,
    private router: Router,
    private modalService: NzModalService,
    private permissionService: PermissionService
  ) {
  }

  login(loginRequest: LoginRequest) {
    return this.authAPIService.login(loginRequest).subscribe(
      result => {
        this.permissionService.parsePermission(result.permission);
        result.permission = null;
        this.storageUser(result);
        if (result.isNeedToChangePassword) {
          this.router.navigate(['auth/change-password']);
        } else {
          this.router.navigate(['home']);
        }
      },
      error => {
        this.modalService.error({
          nzTitle: 'Đăng nhập thất bại',
          nzContent: 'Tên đăng nhập hoặc mật khẩu không đúng. Vui lòng đăng nhập lại.'
        });
      }
    );
  }

  logout() {
    if (localStorage.getItem(environment.tokenKey)) {
      localStorage.removeItem(environment.tokenKey);
    }
    this.router.navigate(['auth/login']);
  }

  private storageUser(user: LoginUser) {
    localStorage.setItem(environment.tokenKey, JSON.stringify(user));
  }

  public getUserFromLocalStorage(): LoginUser {
    return JSON.parse(localStorage.getItem(environment.tokenKey));
  }

  changePassword(changePasswordRequest: ChangePasswordRequest) {
    return this.authAPIService.changePassword(changePasswordRequest).subscribe(
      result => {
        if (result) {
          const loginUser = this.getUserFromLocalStorage();
          loginUser.isNeedToChangePassword = false;
          this.storageUser(loginUser);
          this.router.navigate(['']);
        }
      },
      () => {
        this.modalService.error({
          nzTitle: 'Đổi password thất bại',
          nzContent: 'Mật khẩu không đúng. Vui lòng nhập lại.'
        });
      }
    );
  }

  decodeToken(key: string): string {
    // const user = this.getUserFromLocalStorage();
    // if (user.token) {
    //   const tokenPayload = jwt_decode(user.token);
    //   return tokenPayload[key];
    // }
    return '';
  }

  public getUserRole(): string {
    return this.decodeToken('http://schemas.microsoft.com/ws/2008/06/identity/claims/role');
  }
}
