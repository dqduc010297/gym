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
