import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/core/services/core/loader.service';
import { LoginUser } from 'src/app/features/auth/shared/models/login.user';
import { AuthService } from 'src/app/features/auth/shared/services/auth.service';
import { Role } from '../const/role';

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
