import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIService } from 'src/app/core/services/api.service';
import { User } from 'src/app/user-management/models/user';
import { UserService } from 'src/app/user-management/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: User = new User();
  inbodys: any;
  constructor(
    private activateRouter: ActivatedRoute,
    private apiService: APIService,
  ) { }

  ngOnInit(): void {
    this.activateRouter.params.subscribe(
      params => {
        this.apiService.getUser(params.id).subscribe(
          result => {
            this.user = result;
          }
        );
        this.apiService.getInBodySummarize(params.id).subscribe(
          result => {
            this.inbodys = result;
          }
        );
      }
    );

  }

}
