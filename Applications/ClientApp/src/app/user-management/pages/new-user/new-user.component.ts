import { Component, OnInit } from '@angular/core';
import { RoleOptions } from 'src/app/core/const/role';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
  user: User = new User();
  roleOptions = RoleOptions;

  constructor(
    public userService: UserService
  ) { }

  ngOnInit(): void {
    console.log('new');
  }

  create() {
    this.userService.create(this.user);
  }

  uploaded(event: any) {
    this.user.avatarURL = event.uploadedPath;
  }
}
