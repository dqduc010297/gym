import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, Observer } from 'rxjs';
import { RoleOptions } from 'src/app/core/const/role';
import { IFormState } from 'src/app/core/interfaces/iform-state.interface';
import { IForm } from 'src/app/core/interfaces/iform.interface';
import { APIService } from 'src/app/core/services/api.service';
import { LoaderService } from 'src/app/core/services/loader.service';
import { User } from 'src/app/user-management/models/user';
import { UserService } from 'src/app/user-management/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, IForm, IFormState {
  user: User = new User();
  userForm: FormGroup;

  roleOptions = RoleOptions;
  roleLabel: string;
  dropboxTokenDisplay: string;

  constructor(
    public loaderService: LoaderService,
    private activateRouter: ActivatedRoute,
    public userService: UserService,
    private fb: FormBuilder,
    private apiService: APIService
  ) { }

  isEditMode: boolean;
  setState(): void {
    this.activateRouter.params.subscribe(
      params => {
        if (params.id == 0) {
          this.isEditMode = false;
          this.generateForm(null);
        } else {
          this.isEditMode = true;
          this.apiService.getUser(params.id).subscribe(
            result => {
              console.log(result);
              this.generateForm(result);
            }
          );
        }
      }
    );
  }

  generateForm(data: any): void {
    this.userForm = this.fb.group({
      id: [data?.id],
      fullname: [data?.fullname],
      dateOfBirth: [data?.dateOfBirth],
      gender: [data?.gender],
      dateJoined: [data?.dateJoined],
      avatarURL: [data?.avatarURL],
      status: [data?.status],
      dropboxToken: [data?.dropboxToken],
      phoneNumber: [data?.phoneNumber],
      email: [data?.email],
      tempPassword: [data?.tempPassword],
      roleName: [data?.roleName],
    });
  }

  resetForm(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.generateForm(null);
    this.setState();
  }

  edit() {
    this.userService.navigateToEditUser(this.user.id);
  }

  save() {
    this.userService.save(this.user);
  }

  discard() {
    this.userService.discard();
  }

  uploaded(event: any) {
    this.user.avatarURL = event.uploadedPath;
  }

  submitForm(value) {
    console.log(value);
  }
}
