import { Component, OnInit } from '@angular/core';
import { ChangePasswordModel } from 'src/app/auth/core/models/change-password.model';
import { ChangePasswordRequest } from 'src/app/auth/core/models/change-password.request';
import { AuthService } from 'src/app/auth/core/auth.service';
import { LoaderService } from 'src/app/core/services/loader.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  changePasswordRequest: ChangePasswordRequest = new ChangePasswordRequest();

  constructor(
    private authService: AuthService,
    public loaderService: LoaderService,
  ) { }

  ngOnInit(): void {
  }

  changePassword() {
    this.authService.changePassword(this.changePasswordRequest);
  }
}
