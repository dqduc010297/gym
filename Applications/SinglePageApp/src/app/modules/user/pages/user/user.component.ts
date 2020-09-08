import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
  initLoading = true; // bug
  loadingMore = false;
  data: any[] = [];
  list: Array<{ loading: boolean; name: any }> = [];
  userOverviewRequest: UserOverviewRequest = new UserOverviewRequest();

  constructor(
    private msg: NzMessageService,
    private userService: UserService,
    public loaderService: LoaderService
  ) { }

  ngOnInit(): void {
    this.loadingItem();
    this.loadData();
  }

  loadData(){
    this.userService.getUserOverview(this.userOverviewRequest).subscribe(
      result => {
        this.data = this.data.concat(result);
        this.list = [...this.data];
        this.initLoading = false;
      }
    );
  }

  onLoadMore(): void {
    this.userOverviewRequest.skip += this.userOverviewRequest.take;
    this.loadingMore = true;
    this.loadingItem();
    this.loadData();
  }

  edit(item: any): void {
    this.msg.success(item.email);
  }

  loadingItem() {
    this.list = this.data.concat([...Array(this.userOverviewRequest.take)].fill({}).map(() => ({ loading: true, name: {} })));
  }
}
