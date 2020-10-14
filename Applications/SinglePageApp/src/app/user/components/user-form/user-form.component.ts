import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormAction, FormState } from 'src/app/core/const/form';
import { User } from 'src/app/user/core/models/user';
import { UserRequest } from 'src/app/user/core/models/user.request';
import { LoaderService } from 'src/app/core/services/loader.service';
import { UserAPIService } from '../../core/services/user.api.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  formAction = FormAction;
  state: FormState;
  action: FormAction = FormAction.view;
  dropBoxTokenDisplay: string;

  storagedUser: string;
  user: User = new User();

  userRequest: UserRequest = new UserRequest();

  constructor(
    private userAPIService: UserAPIService,
    public loaderService: LoaderService,
    private activateRouter: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activateRouter.params.subscribe(
      params => {
        console.log(params);
        if (params.id > 0) {
          this.loadUser(params.id);
          this.action = FormAction.view;
        } else {
          this.action = FormAction.create;
        }
      }
    );
  }

  loadUser(userId: number) {
    console.log(userId);
    this.userRequest.body.id = userId;
    this.state = FormState.loading;
    this.userAPIService.getUser(this.userRequest).subscribe(
      result => {
        this.user = result;
        this.storagedUser = JSON.stringify(result);
      }
    );
  }

  loadedAvatar(event: string) {
    this.user.avatarURL = event;
  }

  edit() {
    this.action = this.formAction.edit;
  }

  save() {
    this.state = FormState.saving;
    this.action = this.formAction.view;
    this.userRequest.body = this.user;
    this.userAPIService.updateUser(this.userRequest).subscribe();
  }

  discard() {
    this.action = this.formAction.view;
    this.user = JSON.parse(this.storagedUser);
  }

  create() {
    this.state = FormState.creating;
    this.userRequest.body = this.user;
    this.userAPIService.createUser(this.userRequest).subscribe(
      result => {
        this.router.navigate([`/user/${result}`]);
      }
    );
  }

  uploaded(event: any) {
    this.user.avatarURL = event.uploadedPath;
  }
}