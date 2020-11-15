import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { FormState } from 'src/app/core/const/form';
import { RoleOptions } from 'src/app/core/const/role';
import { IFormState } from 'src/app/core/interfaces/iform-state.interface';
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
export class UserComponent implements OnInit, IForm, IWizard, IFormState {
  isCreate: boolean;
  state: string;

  userForm: FormGroup;
  roleOptions = RoleOptions;

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private apiService: APIService,
    public loaderService: LoaderService,
    private routerService: RouterService,
    private modal: NzModalService
  ) {
    this.generateForm();
  }

  generateForm(): void {
    this.isCreate = true;
    this.userForm = this.fb.group({
      id: [''],
      fullname: ['', [Validators.required]],
      dateOfBirth: ['', [Validators.required]],
      dateJoined: ['', [Validators.required]],
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
    if (this.userForm.dirty) {
      this.modal.confirm({
        nzTitle: 'Bạn có muốn thoát?',
        nzContent: 'Những thay đổi bạn sẽ không được lưu.',
        nzOnOk: () => this.routerService.navigateToUser(this.userForm.value.id),
      });
    } else {
      this.routerService.navigateToUser(this.userForm.value.id);
    }
  }

  ngOnInit(): void {
    this.state = FormState.loading;
    this.activatedRoute.params.subscribe(
      params => {
        // tslint:disable-next-line: radix
        if (Number.parseInt(params.id) > 0) {
          this.isCreate = false;
          this.apiService.getUser(params.id).subscribe(
            result => {
              this.userForm.setValue(result);
            }
          );
        }
      }
    );
  }

  save() {
    this.state = FormState.saving;
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
