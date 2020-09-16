import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, AuthenticationUrl } from '../../shared/services/auth.service';
import { LoginRequest } from '../../shared/requests/login.request';
import { LoaderService } from 'src/app/services/core/loader.service';
import { NzModalService } from 'ng-zorro-antd/modal';
import { LoginMock } from 'src/app/mocks/login.mock';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginRequest: LoginRequest = new LoginRequest();

  constructor(
    private authService: AuthService,
    public loaderService: LoaderService,
    private router: Router,
    private modalService: NzModalService,
  ) { }

  ngOnInit(): void {
  }

  signIn() {
    this.authService.login(this.loginRequest);
    // this.loginMock.doMock().subscribe(
    //   result => {
    //     localStorage.setItem(environment.tokenKey, JSON.stringify(result));
    //     this.authService.currentUserSubject.next(result);
    //     this.router.navigate(['']);
    //   }
    // );
  }
}
