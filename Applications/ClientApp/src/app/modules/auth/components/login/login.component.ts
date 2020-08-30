import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, AuthenticationUrl } from '../../../../services/auth/auth.service';
import { LoginUser } from '../../../../models/auth/login';
import { LoaderService } from 'src/app/services/core/loader.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginUser: LoginUser = new LoginUser();

  constructor(
    private authService: AuthService,
    public loaderService: LoaderService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  signIn() {
    this.authService.login(this.loginUser)
      .subscribe(
        result => {
          this.router.navigate(['']);
        },
        error => {
          // this.modalService.error({
          //   nzTitle: 'Đăng nhập thất bại',
          //   nzContent: 'Tên đăng nhập hoặc mật khẩu không đúng. Vui lòng đăng nhập lại.'
          // });
        }
      );
  }
}
