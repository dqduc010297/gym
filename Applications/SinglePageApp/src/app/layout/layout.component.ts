import { Component, OnInit } from '@angular/core';
import { Role } from '../const/role';
import { LoginUser } from '../modules/auth/shared/models/login.user';
import { AuthService } from '../modules/auth/shared/services/auth.service';
import { LoaderService } from '../services/core/loader.service';

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
