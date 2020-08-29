import { Component, OnInit } from '@angular/core';
import { User } from '../models/auth/user';
import { AuthService } from '../services/auth/auth.service';
import { LoaderService } from '../services/core/loader.service';
import * as $ from 'jquery';

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
    // tslint:disable-next-line: deprecation
    $('#menu-toggle').click((e) => {
      e.preventDefault();
      $('#wrapper').toggleClass('toggled');
    });
  }

  logout() {
    this.authService.logout();
  }
}
