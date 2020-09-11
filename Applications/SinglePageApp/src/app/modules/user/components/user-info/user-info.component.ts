import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { UserInfoRequest } from 'src/app/requests/user/user-info.request';
import { UserService } from 'src/app/services/user/user.service';
import { UserInfo } from 'src/app/models/user/user-info';
import { FormAction } from 'src/app/const/form-action';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit, OnChanges {
  @Input() userId: number;
  userInfoRequest: UserInfoRequest = new UserInfoRequest();
  formAction = FormAction;
  action: FormAction = FormAction.view;
  dropBoxTokenDisplay: string;

  userInfo: UserInfo = new UserInfo();

  constructor(
    private userService: UserService
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.userId.currentValue) {
      this.userInfoRequest.userId = changes.userId.currentValue;
      this.userService.getUserInfo(this.userInfoRequest).subscribe(
        result => {
          this.userInfo = {
            avatarURL: "assets/images/default-avatar.png",
            dateJoined: new Date("2019-08-01T00:00:00Z"),
            dateOfBirth: new Date("1992-09-18T00:00:00Z"),
            email: "9@gmail.com",
            fullname: "Tăng Phương Chi",
            gender: 0,
            height: 0,
            id: 9,
            phoneNumber: "0355573996",
            status: '0',
            dropboxToken: 'm-CXENCMI5AAAAAAAAAAAU-H0G9AMUJLY_CbWWjeKHyHfk3nq837WcSUecOMmGsz'
          };
        }
      );
    }
  }

  ngOnInit(): void {
    this.dropBoxTokenDisplay = this.userInfo.dropboxToken.substring(0, 10) + '...';
  }

  edit() {
    this.action = this.formAction.edit;
  }

  save() {
    this.action = this.formAction.view;
  }

  submit() {
    this.action = this.formAction.view;
  }
}
