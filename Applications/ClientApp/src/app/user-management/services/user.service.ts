import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { FormState } from 'src/app/core/const/form';
import { LoaderService } from 'src/app/core/services/loader.service';
import { User } from '../models/user';
import { UserRequest } from '../models/user.request';
import { UserAPIService } from './user.api.service';

@Injectable({ providedIn: 'root' })
export class UserService implements OnDestroy {
  private loadedUser = new BehaviorSubject(null);
  state: FormState;
  user = this.loadedUser.asObservable();
  userId: number;
  storagedUser: string;
  userRequest: UserRequest = new UserRequest();

  constructor(
    private router: Router,
    private userAPIService: UserAPIService,
    private loaderService: LoaderService
  ) {
  }

  ngOnDestroy(): void {
    this.loadedUser.unsubscribe();
  }

  public get isLoading() {
    return this.loaderService.isLoading;
  }

  navigateToNewUser() {
    this.router.navigate(['user/new']);
  }

  navigateToUser(id: number) {
    this.router.navigate([`wizard/user/${id}`]);
  }

  navigateToEditUser(id: number) {
    this.router.navigate([`wizard/user/${id}`]);
  }

  navigateToUsers() {
    this.router.navigate(['/user']);
  }

  loadUser(id: number) {
    this.userRequest.body.id = id;
    this.state = FormState.loading;
    this.userAPIService.getUser(this.userRequest).pipe().subscribe(
      result => {
        this.storagedUser = JSON.stringify(result);
        this.loadedUser.next(result);
      }
    );
  }

  discard() {
    const storagedUser: User = JSON.parse(this.storagedUser);
    this.loadedUser.next(storagedUser);
    this.navigateToUser(storagedUser.id);
  }

  save(savedUser: User) {
    this.state = FormState.saving;
    this.userRequest.body = savedUser;
    this.userAPIService.updateUser(this.userRequest).subscribe(
      () => {
        this.storagedUser = JSON.stringify(savedUser);
        this.loadedUser.next(savedUser);
        this.navigateToUser(savedUser.id);
      }
    );
  }

  create(createdUser: User) {
    this.state = FormState.creating;
    this.userRequest.body = createdUser;
    this.userAPIService.createUser(this.userRequest).subscribe(
      result => {
        // tslint:disable-next-line: radix
        this.navigateToUser(Number.parseInt(result));
      }
    );
  }
}
