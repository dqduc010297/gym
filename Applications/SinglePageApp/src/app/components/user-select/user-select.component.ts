import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserSearchRs } from 'src/app/models/user/user-search-rs';
import { UserSearchByPhoneRequest } from 'src/app/models/user/user-search-by-phone-request';
import { UserService } from 'src/app/services/user/user.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-select',
  templateUrl: './user-select.component.html',
  styleUrls: ['./user-select.component.scss']
})
export class UserSelectComponent implements OnInit {
  @Input() isMultiSelect = false;
  @Output() onSelected: EventEmitter<number[]> = new EventEmitter();

  optionList: UserSearchRs[] = [];
  userSearch: UserSearchByPhoneRequest = new UserSearchByPhoneRequest();
  isLoading = false;

  selectedUser = null;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    // this.loadMore();
  }

  // onSearch(value: string) {
  //   if (value.length === 0) {
  //     this.optionList = [];
  //     return;
  //   }
  //   if (value.length < 4 || this.optionList.length > 0) {
  //     return;
  //   }
  //   this.isLoading = true;
  //   this.userSearch.phoneNumber = value;
  //   this.userService.getMemberSearch(this.userSearch).subscribe(
  //     result => {
  //       this.isLoading = false;
  //       this.optionList = result;
  //     }
  //   );
  // }

  // selected(event) {
  //   this.onSelected.emit(event);
  // }

  // loadMore() {
  //   this.userService.getMemberSearch(this.userSearch).subscribe(
  //     result => {
  //       this.isLoading = false;
  //       this.optionList = [...this.optionList, ...result];
  //     }
  //   );
  // }

  // randomUserUrl = 'https://api.randomuser.me/?results=10';
  // optionList: string[] = [];
  // tslint:disable:no-any
  // getRandomNameList(): Observable<string[]> {
  //   return this.http
  //     .get(`${this.randomUserUrl}`)
  //     .pipe(map((res: any) => res.results))
  //     .pipe(
  //       map((list: any) => {
  //         return list.map((item: any) => `${item.name.first}`);
  //       })
  //     );
  // }

  loadMore(): void {
    this.isLoading = true;
    this.userSearch.skip += this.userSearch.take;
    this.userService.getMemberSearch(this.userSearch).subscribe(
      result => {
        this.isLoading = false;
        this.optionList = [...this.optionList, ...result];
      }
    );
  }


  onSearch(value: string) {
    if (value.length === 0) {
      this.optionList = [];
      return;
    }
    if (value.length < 4 || this.optionList.length > 0) {
      return;
    }
    this.isLoading = true;
    this.userSearch.phoneNumber = value;
    this.userService.getMemberSearch(this.userSearch).subscribe(
      result => {
        this.isLoading = false;
        this.optionList = result;
      }
    );
  }
}
