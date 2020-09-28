import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/modules/auth/shared/services/auth.service';
import { LoaderService } from 'src/app/services/core/loader.service';
import { ChangePasswordRequest } from '../../shared/requests/change-password.request';

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
