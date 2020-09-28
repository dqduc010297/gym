import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { UserService } from 'src/app/services/user/user.service';
import { UserOverviewRequest } from 'src/app/requests/user/user-overview.request';
import { LoaderService } from 'src/app/services/core/loader.service';
import { FormAction } from 'src/app/const/form';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {
  isInitPage = true;

  constructor(
    public loaderService: LoaderService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  selectedUser(event) {
    this.isInitPage = false;
    this.redirectiToForm(event);
  }

  createUser() {
    this.isInitPage = false;
    this.redirectiToForm(0);
  }

  redirectiToForm(id: number) {
    this.router.navigate([`user/${id}`]);
  }
}
