import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NzMessageService } from 'ng-zorro-antd/message';
import { UserService } from 'src/app/services/user/user.service';
import { UserOverviewRequest } from 'src/app/models/user/user-overview.request';

const count = 5;
const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';
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
    private http: HttpClient,
    private msg: NzMessageService,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.userService.getUserOverview(new UserOverviewRequest()).subscribe(
      result => {
        console.log(result);
      }
    );
    this.getData((res: any) => {
      this.data = res.results;
      this.list = res.results;
      this.initLoading = false;
    });
  }

  getData(callback: (res: any) => void): void {
    this.http.get(fakeDataUrl).subscribe((res: any) => callback(res));
  }

  onLoadMore(): void {
    this.loadingMore = true;
    this.loadingItem();
    this.http.get(fakeDataUrl).subscribe((res: any) => {
      this.data = this.data.concat(res.results);
      this.list = [...this.data];
      this.loadingMore = false;
    });
  }

  edit(item: any): void {
    this.msg.success(item.email);
  }

  loadingItem() {
    this.list = this.data.concat([...Array(this.userOverviewRequest.take)].fill({}).map(() => ({ loading: true, name: {} })));
  }
}