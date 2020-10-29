import { Component, OnInit } from '@angular/core';
import { UserAPIService } from 'src/app/user-management/services/user.api.service';
import { UsersRequest } from '../../models/users.request';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  usersRequest: UsersRequest = new UsersRequest();

  constructor(
    private userAPIService: UserAPIService
  ) { }

  ngOnInit(): void {
    this.userAPIService.list(this.usersRequest).subscribe(
      result => {
        console.log(result);
      }
    );
  }

}
