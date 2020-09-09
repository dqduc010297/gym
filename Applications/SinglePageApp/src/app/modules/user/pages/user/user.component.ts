import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { UserService } from 'src/app/services/user/user.service';
import { UserOverviewRequest } from 'src/app/requests/user/user-overview.request';
import { LoaderService } from 'src/app/services/core/loader.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {
  selectedUserId: number;
  constructor(
    public loaderService: LoaderService
  ) { }

  ngOnInit(): void {
  }

  selectedUser(event) {
    this.selectedUserId = event;
  }
}
