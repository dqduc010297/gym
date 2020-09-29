import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/core/const/role';
import { LoginUser } from 'src/app/auth/core/models/login.user';
import { AuthService } from 'src/app/auth/core/auth.service';
import { LoaderService } from 'src/app/core/services/loader.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  isCollapsed = false;
  isLogin = false;
  currentUser: LoginUser = new LoginUser();
  userRole = Role;

  constructor(
    public authService: AuthService,
    public loaderService: LoaderService,
  ) {
    this.authService.currentUser.subscribe(user => this.currentUser = user);
  }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
  }
}
