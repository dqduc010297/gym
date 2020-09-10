import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { UserInfoRequest } from 'src/app/requests/user/user-info.request';
import { UserService } from 'src/app/services/user/user.service';
import { UserInfo } from 'src/app/models/user/user-info';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit, OnChanges {
  @Input() userId: number;
  userInfoRequest: UserInfoRequest = new UserInfoRequest();
  userInfo: UserInfo = new UserInfo();

  constructor(
    private userService: UserService
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.userId.currentValue) {
      this.userInfoRequest.userId = changes.userId.currentValue;
      this.userService.getUserInfo(this.userInfoRequest).subscribe(
        result => {
          this.userInfo = result;
        }
      );
    }
  }

  ngOnInit(): void {
  }

}
