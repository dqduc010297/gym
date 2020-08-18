import { Component, OnInit } from '@angular/core';
import { User } from '../models/auth/user';
import { AuthService } from '../services/auth/auth.service';
import { LoaderService } from '../services/core/loader.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  isCollapsed = false;
  isLogin = false;
  currentUser: User;

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
