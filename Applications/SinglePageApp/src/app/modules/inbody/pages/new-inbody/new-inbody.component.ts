import { Component, OnInit } from '@angular/core';
import { InBodyDetail } from 'src/app/models/inbody/inbody-detail';
import { InBodyStandardService } from 'src/app/services/inbody/inbody-standard.service';
import { InBodyService } from 'src/app/services/inbody/inbody.service';
import { LoaderService } from 'src/app/services/core/loader.service';
import { UserService } from 'src/app/services/user/user.service';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-new-inbody',
  templateUrl: './new-inbody.component.html',
  styleUrls: ['./new-inbody.component.scss']
})
export class NewInbodyComponent implements OnInit {
  inBodyDetail: InBodyDetail = new InBodyDetail();
  randomUserUrl = 'https://api.randomuser.me/?results=5';
  searchChange$ = new BehaviorSubject('');
  optionList: string[] = [];
  selectedUser?: string;
  isLoading = false;

  constructor(
    private inBodyStandardService: InBodyStandardService,
    private inBodyService: InBodyService,
    public loaderService: LoaderService,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.inBodyStandardService.getLatestInBody().subscribe(
      result => {
        this.inBodyDetail = result;
      }
    );
    this.userService.getMemberSearch().subscribe(
      result => {
        console.log(result);
      }
    );

    const getRandomNameList = (name: string) =>
      this.http
        .get(`${this.randomUserUrl}`)
        .pipe(map((res: any) => res.results))
        .pipe(
          map((list: any) => {
            return list.map((item: any) => `${item.name.first} ${name}`);
          })
        );
    const optionList$: Observable<string[]> = this.searchChange$
      .asObservable()
      .pipe(debounceTime(500))
      .pipe(switchMap(getRandomNameList));
    optionList$.subscribe(data => {
      this.optionList = data;
      this.isLoading = false;
    });
  }

  submit() {
    this.inBodyService.createInBody(this.inBodyDetail).subscribe(
      result => {
        console.log(result);
      }
    );
  }

  onSearch(value: string): void {
    this.isLoading = true;
    this.searchChange$.next(value);
  }

}
