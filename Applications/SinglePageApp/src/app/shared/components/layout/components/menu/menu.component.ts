import { Component, Input, OnInit } from '@angular/core';
import { Role } from 'src/app/core/const/role';

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
  ) { }

  ngOnInit(): void {
  }

}
