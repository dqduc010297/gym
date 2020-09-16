import { Component, Input, OnInit } from '@angular/core';
import { Role } from 'src/app/const/role';
import { LoginUser } from 'src/app/modules/auth/shared/models/login.user';
import { AuthService } from 'src/app/modules/auth/shared/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() menuType: string;
  @Input() role: Role;
  userRole = Role;
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

}
