import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, Observer } from 'rxjs';
import { RoleOptions } from 'src/app/core/const/role';
import { IForm } from 'src/app/core/interfaces/iform.interface';
import { APIService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, IForm {
  form: FormGroup;
  userForm: FormGroup;
  roleOptions = RoleOptions;
  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private apiService: APIService,
  ) {
    this.generateForm();
  }

  generateForm(): void {
    this.userForm = this.fb.group({
      id: [''],
      fullname: ['', [Validators.required], [this.userNameAsyncValidator]],
      dateOfBirth: ['', [Validators.email, Validators.required]],
      dateJoined: [''],
      avatarURL: ['', [Validators.required], [this.userNameAsyncValidator]],
      status: ['', [Validators.email, Validators.required]],
      dropboxToken: [''],
      phoneNumber: ['', [Validators.required], [this.userNameAsyncValidator]],
      email: ['', [Validators.email, Validators.required]],
      tempPassword: [''],
      roleName: ['', [Validators.required], [this.userNameAsyncValidator]],
      gender: ['', [Validators.required], [this.userNameAsyncValidator]],
    });
  }

  resetForm(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        if (Number.parseInt(params.id) > 0) {
          this.apiService.getUser(params.id).subscribe(
            result => {
              this.userForm.setValue(result);
              console.log(this.userForm);
            }
          );
        }
      });
  }

  submit() {

  }
  validateForm: FormGroup;

  submitForm(value: { userName: string; email: string; password: string; confirm: string; comment: string }): void {
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty();
      this.validateForm.controls[key].updateValueAndValidity();
    }
    console.log(value);
  }


  validateConfirmPassword(): void {
    setTimeout(() => this.validateForm.controls.confirm.updateValueAndValidity());
  }

  userNameAsyncValidator = (control: FormControl) =>
    new Observable((observer: Observer<ValidationErrors | null>) => {
      setTimeout(() => {
        if (control.value === 'JasonWood') {
          // you have to return `{error: true}` to mark it as an error event
          observer.next({ error: true, duplicated: true });
        } else {
          observer.next(null);
        }
        observer.complete();
      }, 1000);
    });

  confirmValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { error: true, required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  uploaded(event: any) {

  }
}
