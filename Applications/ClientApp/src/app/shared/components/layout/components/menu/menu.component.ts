import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/core/auth.service';
import { LoginUser } from 'src/app/auth/core/models/login.user';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})


export class MenuComponent implements OnInit {
  @Input() menuType: string;
  currentUser: LoginUser;
  menuItems: any[] = [
    { title: 'Home', icon: 'home', url: '/home', isShow: true, children: [] },
    {
      title: 'New', icon: 'plus', url: '', isShow: true, children: [
        { title: 'InBody', icon: 'home', url: '/inbody/new', isShow: true, children: [] },
        { title: 'Meal plan', icon: 'home', url: '/home', isShow: true, children: [] },
        { title: 'User', icon: 'home', url: '/wizard/user/0', isShow: true, children: [] },
      ]
    },
    { title: 'InBody', icon: 'form', url: '/inbody', isShow: true, children: [] },
    { title: 'Goal', icon: 'aim', url: '/goal', isShow: true, children: [] },
    { title: 'Album', icon: 'appstore', url: '/album', isShow: true, children: [] },
    { title: 'User', icon: 'user', url: '/users', isShow: true, children: [] },
  ];
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.currentUser = this.authService._loginUser;
  }

  checkPermission(permission: string) {
    return this.authService.isClaimValid(permission);
  }
}
