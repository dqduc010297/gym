import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FormState } from 'src/app/core/const/form';
import { LoaderService } from 'src/app/core/services/loader.service';
import { UserRequest } from 'src/app/user-managements/models/user.request';
import { User } from '../models/user';
import { UserAPIService } from './user.api.service';

@Injectable({ providedIn: 'root' })
export class UserService {
  state: FormState;
  user: User;
  userId: number;
  storagedUser: string;
  userRequest: UserRequest = new UserRequest();

  constructor(
    private router: Router,
    private userAPIService: UserAPIService,
    private loaderService: LoaderService
  ) {
  }

  public get isLoading() {
    return this.loaderService.isShowLoader(this.userRequest.getLoadingKey());
  }

  navigateToNewUser() {
    this.router.navigate(['users/new']);
  }

  navigateToUser(id: number) {
    this.router.navigate([`users/${id}`]);
  }

  navigateToEditUser(id: number) {
    this.router.navigate([`users/edit/${id}`]);
  }

  navigateToUsers() {
    this.router.navigate(['/users']);
  }

  loadUser() {
    if (this.user?.id !== this.userId) {
      this.userRequest.body.id = this.userId;
      this.state = FormState.loading;
      this.userAPIService.getUser(this.userRequest).pipe().subscribe(
        result => {
          this.user = result;
          this.storagedUser = JSON.stringify(result);
        }
      );
    }
  }

  discard() {
    this.user = JSON.parse(this.storagedUser);
    this.navigateToUser(this.user.id);
  }

  save() {
    this.state = FormState.saving;
    this.userRequest.body = this.user;
    this.userAPIService.updateUser(this.userRequest).subscribe(
      () => {
        this.storagedUser = JSON.stringify(this.user);
        this.navigateToUser(this.user.id);
      }
    );
  }
}
