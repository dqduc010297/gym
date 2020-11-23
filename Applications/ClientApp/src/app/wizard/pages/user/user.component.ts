import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
    this.userForm = new FormGroup({
      id: new FormControl(0),
      fullname: new FormControl('', [Validators.required]),
      dateOfBirth: new FormControl('', [Validators.required]),
      dateJoined: new FormControl('', [Validators.required]),
      avatarURL: new FormControl(''),
      status: new FormControl(''),
      dropboxToken: new FormControl(''),
      phoneNumber: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email, Validators.required]),
      tempPassword: new FormControl(''),
      roleName: new FormControl('', [Validators.required]),
      gender: new FormControl(''),
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

  create() {
    this.apiService.createUser(this.userForm.value).subscribe(
      result => {
        console.log(result);
      }
    );
  }
}
