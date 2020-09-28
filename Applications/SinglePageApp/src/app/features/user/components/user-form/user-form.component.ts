import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { UserInfoRequest } from 'src/app/requests/user/user-info.request';
import { UserService } from 'src/app/services/user/user.service';
import { UserInfo } from 'src/app/models/user/user-info';
import { FormAction, FormState } from 'src/app/const/form';
import { ActivatedRoute, Router } from '@angular/router';
import { LoaderService } from 'src/app/services/core/loader.service';
import { UserRequest } from 'src/app/requests/user/user.request';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  userId: number;
  formAction = FormAction;
  action: FormAction = FormAction.view;
  dropBoxTokenDisplay: string;

  userSource: string;

  userInfo: UserInfo = new UserInfo();
  userRequest: UserRequest = new UserRequest();
  userInfoRequest: UserInfoRequest = new UserInfoRequest();
  state: FormState;

  constructor(
    private userService: UserService,
    public loaderService: LoaderService,
    private activateRouter: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activateRouter.params.subscribe(
      params => {
        if (params.id > 0) {
          this.userId = params.id;
          this.loadUser();
          this.action = FormAction.view;
        } else {
          this.userInfo = new UserInfo();
          this.action = FormAction.create;
        }
      }
    );
  }

  loadUser() {
    this.userInfoRequest.userId = this.userId;
    this.state = FormState.loading;
    this.userService.getUserInfo(this.userInfoRequest).subscribe(
      result => {
        this.userInfo = result;
        this.userSource = JSON.stringify(result);
      }
    );
  }

  loadedAvatar(event: string) {
    this.userInfo.avatarURL = event;
  }

  edit() {
    this.action = this.formAction.edit;
  }

  save() {
    this.state = FormState.saving;
    this.action = this.formAction.view;
    this.userRequest.userInfo = this.userInfo;
    this.userService.updateUserInfo(this.userRequest).subscribe();
  }

  discard() {
    this.action = this.formAction.view;
    this.userInfo = JSON.parse(this.userSource);
  }

  create() {
    this.state = FormState.creating;
    this.userRequest.userInfo = this.userInfo;
    this.userService.createUser(this.userRequest).subscribe(
      result => {
        this.router.navigate([`/user/${result}`]);
      }
    );
  }

  uploaded(event: any) {
    this.userInfo.avatarURL = event.uploadedPath;
  }
}
