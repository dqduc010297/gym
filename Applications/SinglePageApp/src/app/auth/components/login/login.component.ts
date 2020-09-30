import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { LoaderService } from 'src/app/core/services/loader.service';
import { LoginRequest } from '../../core/models/login.request';

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
  ) { }

  ngOnInit(): void {
    console.log(this.loginRequest);
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
