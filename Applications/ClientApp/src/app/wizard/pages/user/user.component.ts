import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RoleOptions } from 'src/app/core/const/role';
import { IForm } from 'src/app/core/interfaces/iform.interface';
import { IWizard } from 'src/app/core/interfaces/iwizard.interface';
import { APIService } from 'src/app/core/services/api.service';
import { LoaderService } from 'src/app/core/services/loader.service';
import { RouterService } from 'src/app/core/services/router.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, IForm, IWizard {
  isCreate: boolean;
  isChanged = false;

  storageUser: string;
  userForm: FormGroup;
  roleOptions = RoleOptions;

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private apiService: APIService,
    public loaderService: LoaderService,
    private routerService: RouterService,
  ) {
    this.generateForm();
  }

  generateForm(): void {
    this.isCreate = true;
    this.userForm = this.fb.group({
      id: [''],
      fullname: ['', [Validators.required]],
      dateOfBirth: ['', [Validators.required]],
      dateJoined: [''],
      avatarURL: [''],
      status: [''],
      dropboxToken: [''],
      phoneNumber: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      tempPassword: [''],
      roleName: ['', [Validators.required]],
      gender: [''],
    });
  }

  resetForm(): void {
    this.userForm.reset();
    this.userForm.setValue(JSON.parse(this.storageUser));
    this.routerService.navigateToUser(this.userForm.value.id);
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        // tslint:disable-next-line: radix
        if (Number.parseInt(params.id) > 0) {
          this.isCreate = false;
          this.apiService.getUser(params.id).subscribe(
            result => {
              this.storageUser = JSON.stringify(result);
              this.userForm.setValue(result);
              console.log(this.userForm);
            }
          );
        }
      }
    );
  }

  save() {
    this.apiService.updateUser(this.userForm.value).subscribe(
      () => {
        this.routerService.navigateToUser(this.userForm.value.id);
      }
    );
  }

  uploaded(event: any) {
    this.userForm.controls.avatarURL.setValue(event.uploadedPath);
    console.log(this.userForm);
  }
}
