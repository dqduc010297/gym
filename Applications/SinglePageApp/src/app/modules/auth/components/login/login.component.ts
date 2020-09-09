import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, AuthenticationUrl } from '../../../../services/auth/auth.service';
import { LoaderService } from 'src/app/services/core/loader.service';
import { NzModalService } from 'ng-zorro-antd/modal';
import { LoginMock } from 'src/app/mocks/login.mock';
import { environment } from 'src/environments/environment';
import { LoginRequest } from 'src/app/requests/auth/login.request';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginUser: LoginRequest = new LoginRequest();

  constructor(
    private authService: AuthService,
    public loaderService: LoaderService,
    private router: Router,
    private modalService: NzModalService,
    private loginMock: LoginMock
  ) { }

  ngOnInit(): void {
  }

  signIn() {
    this.authService.login(this.loginUser)
      .subscribe(
        result => {
          // this.router.navigate(['']);
        },
        error => {
          this.modalService.error({
            nzTitle: 'Đăng nhập thất bại',
            nzContent: 'Tên đăng nhập hoặc mật khẩu không đúng. Vui lòng đăng nhập lại.'
          });
        }
      );
    // this.loginMock.doMock().subscribe(
    //   result => {
    //     localStorage.setItem(environment.tokenKey, JSON.stringify(result));
    //     this.authService.currentUserSubject.next(result);
    //     this.router.navigate(['']);
    //   }
    // );
  }
}
