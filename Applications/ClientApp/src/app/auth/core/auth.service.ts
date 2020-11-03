import { Injectable } from '@angular/core';
import { LoginUser } from './models/login.user';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ChangePasswordRequest } from './models/change-password.request';
import { AuthAPIService } from './auth.api.service';
import { LoginRequest } from './models/login.request';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private loginUser: LoginUser = new LoginUser();

  constructor(
    private authAPIService: AuthAPIService,
    private router: Router,
    private modalService: NzModalService,
  ) {
  }

  login(loginRequest: LoginRequest) {
    return this.authAPIService.login(loginRequest).subscribe(
      result => {
        localStorage.setItem(environment.tokenKey, result.token);
        localStorage.setItem('appVersion', environment.appVersion);
        this.loginUser.updateLoginUser(result.token);
        if (result.isNeedToChangePassword) {
          this.router.navigate(['auth/change-password']);
        } else {
          this.router.navigate(['home']);
        }
      },
      () => {
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
    this.loginUser.resetLoginUser();
    this.router.navigate(['auth/login']);
  }

  changePassword(changePasswordRequest: ChangePasswordRequest) {
    return this.authAPIService.changePassword(changePasswordRequest).subscribe(
      result => {
        if (result) {
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

  // This method can be called a couple of different ways
  // *hasClaim="'claimType'"  // Assumes claimValue is true
  // *hasClaim="'claimType:value'" // Compares claimValue to value
  // *hasClaim="['claimType1','claimType2:value','claimType3']"
  hasClaim(claimType: any): boolean {
    let ret = false;

    // See if an array of values was passed in.
    if (typeof claimType === 'string') {
      ret = this.isClaimValid(claimType);
    }
    else {
      const claims: string[] = claimType;
      if (claims) {
        // tslint:disable-next-line: prefer-for-of
        for (let index = 0; index < claims.length; index++) {
          ret = this.isClaimValid(claims[index]);
          // If one is successful, then let them in
          if (ret) {
            break;
          }
        }
      }
    }

    return ret;
  }

  private isClaimValid(claimType: string): boolean {
    let ret = false;
    let auth: LoginUser = null;
    let claimValue = '';

    // Retrieve security object
    auth = this.loginUser;
    if (auth) {
      // See if the claim type has a value
      // *hasClaim="'claimType:value'"
      if (claimType.indexOf(':') >= 0) {
        const words: string[] = claimType.split(':');
        claimType = words[0].toLowerCase();
        claimValue = words[1];
      }
      else {
        claimType = claimType.toLowerCase();
        // Either get the claim value, or assume 'true'
        claimValue = claimValue ? claimValue : 'true';
      }
      // Attempt to find the claim
      ret = auth._claims.find(
        c => c.type.toLowerCase() === claimType
          && c.value === claimValue) != null;
    }

    return ret;
  }

  public get _loginUser(): LoginUser {
    if (this.loginUser._id === -1 || !this.loginUser._id) {
      const token = localStorage.getItem(environment.tokenKey);
      if (token) {
        this.loginUser.updateLoginUser(localStorage.getItem(environment.tokenKey));
      } else {
        this.router.navigate(['auth/login']);
      }
    }
    return this.loginUser;
  }
}
