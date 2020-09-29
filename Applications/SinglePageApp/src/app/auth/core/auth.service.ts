import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginUser } from './models/login.user';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ChangePasswordRequest } from './models/change-password.request';
import jwt_decode from 'jwt-decode';
import { AuthAPIService } from './auth.api.service';
import { LoginRequest } from './models/login.request';

@Injectable({ providedIn: 'root' })
export class AuthService {
  public currentUserSubject: BehaviorSubject<LoginUser>;
  public currentUser: Observable<LoginUser>;

  constructor(
    private authAPIService: AuthAPIService,
    private router: Router,
    private modalService: NzModalService,
  ) {
    this.currentUserSubject = new BehaviorSubject<LoginUser>(JSON.parse(localStorage.getItem(environment.tokenKey)));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): LoginUser {
    return this.currentUserSubject.value;
  }

  login(loginRequest: LoginRequest) {
    return this.authAPIService.login(loginRequest).subscribe(
      result => {
        this.storageUser(result);
        if (result.isNeedToChangePassword) {
          this.router.navigate(['auth/change-password']);
        } else {
          this.router.navigate(['']);
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
    this.currentUserSubject.next(null);
    this.router.navigate(['auth/login']);
  }

  private storageUser(user: LoginUser) {
    localStorage.setItem(environment.tokenKey, JSON.stringify(user));
    this.currentUserSubject.next(user);
  }

  private getUserFromLocalStorage(): LoginUser {
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
      error => {
        this.modalService.error({
          nzTitle: 'Đổi password thất bại',
          nzContent: 'Mật khẩu không đúng. Vui lòng nhập lại.'
        });
      }
    );
  }

  decodeToken(key: string): string {
    const user = this.getUserFromLocalStorage();
    if (user.token) {
      const tokenPayload = jwt_decode(user.token);
      return tokenPayload[key];
    }
  }
}
