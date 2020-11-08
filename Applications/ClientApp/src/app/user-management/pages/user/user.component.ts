import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoaderService } from 'src/app/core/services/loader.service';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: User;
  roleLabel: string;

  constructor(
    public loaderService: LoaderService,
    private activateRouter: ActivatedRoute,
    public userService: UserService
  ) { }

  ngOnInit(): void {
    this.activateRouter.params.subscribe(
      params => {
        if (params.id) {
          // tslint:disable-next-line: radix
          this.userService.userId = params.id;
        }
      }
    );
  }

  edit() {
    this.userService.navigateToEditUser(this.userService.user.id);
  }
}
