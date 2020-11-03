import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormAction, FormState } from 'src/app/core/const/form';
import { LoaderService } from 'src/app/core/services/loader.service';
import { User } from 'src/app/user-management/models/user';
import { UserAPIService } from 'src/app/user-management/services/user.api.service';
import { UserRequest } from '../../../models/user.request';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit, OnChanges {
  @Input() userId: number;

  formAction = FormAction;
  state: FormState;
  action: FormAction = FormAction.view;
  dropBoxTokenDisplay: string;

  storagedUser: string;
  user: User = new User();

  userRequest: UserRequest = new UserRequest();

  roleOptions = [
    { label: 'Huấn luyện viên', value: 'PERSONAL_TRAINER' },
    { label: 'Khách hàng', value: 'MEMBER' },
    { label: 'Master', value: 'MASTER' },
    { label: 'Quản lý', value: 'MANAGER' },
    { label: 'SYS_ADMIN', value: 'SYS_ADMIN' },
    { label: 'Tiếp tân', value: 'RECEPTION' },
  ];

  roleLabel: string;

  constructor(
    private userAPIService: UserAPIService,
    public loaderService: LoaderService,
    private activateRouter: ActivatedRoute,
    private router: Router
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.userId) {
      this.loadUser(changes.userId?.currentValue);
      this.action = FormAction.view;
    }
  }

  ngOnInit(): void {
    this.activateRouter.params.subscribe(
      params => {
        // tslint:disable-next-line: radix
        const id = Number.parseInt(params.id);
        if (id > 0) {
          this.loadUser(params.id);
          this.action = FormAction.view;
        }
        if (id === 0) {
          this.action = FormAction.create;
        }
      }
    );
  }

  loadUser(userId: number) {
    this.userRequest.body.id = userId;
    this.state = FormState.loading;
    this.userAPIService.getUser(this.userRequest).subscribe(
      result => {
        this.user = result;
        this.storagedUser = JSON.stringify(result);
        this.roleLabel = this.roleOptions.find(p => p.value === result.roleName).label;
      }
    );
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
    this.roleLabel = this.roleOptions.find(p => p.value === this.user.roleName).label;
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
