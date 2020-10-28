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
  currentUser: LoginUser

  constructor(
    private authService: AuthService
  ) { }
  ngOnInit(): void {
    this.currentUser = this.authService._loginUser;
  }

  checkPermission(permission: string) {
    const permissionIndex = this.currentUser._claims.map(p => p.type.toLowerCase()).indexOf(permission.toLowerCase());
    if (permissionIndex === -1) {
      return false;
    }
    return this.currentUser._claims[permissionIndex].value === 'True';
  }
}
