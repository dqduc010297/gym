import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { PaginationResponse } from 'src/app/core/responses/pagination.response';
import { APIService } from 'src/app/core/services/api.service';
import { LoaderService } from 'src/app/core/services/loader.service';
import { RouterService } from 'src/app/core/services/router.service';
import { User } from 'src/app/user-management/models/user';
import { UsersRequest } from 'src/app/user-management/models/users.request';
import { UserAPIService } from 'src/app/user-management/services/user.api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  usersRequest: UsersRequest = new UsersRequest();
  usersResponse: PaginationResponse<User> = new PaginationResponse<User>();

  constructor(
    private userAPIService: UserAPIService,
    public loaderService: LoaderService,
    private routerService: RouterService,
    private apiService: APIService,
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  onQueryParamsChange(params: NzTableQueryParams): void {
    this.usersRequest.pageNumber = params.pageIndex;
    this.loadData();
  }

  loadData() {
    this.apiService.getUsers(this.usersRequest).subscribe(
      result => {
        this.usersResponse = result;
      }
    );
  }

  detail(id: number) {
    this.routerService.navigateToUser(id);
  }

  reload() {
    this.loadData();
  }

  createUser() {
    this.routerService.navigateToNewUser();
  }
}
