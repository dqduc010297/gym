import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoleOptions } from 'src/app/core/const/role';
import { LoaderService } from 'src/app/core/services/loader.service';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: User = new User();
  roleLabel: string;
  dropboxTokenDisplay: string;

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
          this.userService.loadUser(Number.parseInt(params.id));
        }
      }
    );
    this.userService.user.subscribe(
      user => {
        if (user) {
          this.user = user;
          this.roleLabel = RoleOptions.find(p => p.value === this.user.roleName)?.label;
          if (this.user.dropboxToken) {
            this.dropboxTokenDisplay = `${this.user.dropboxToken?.substring(0, 10)}...`;
          } else {
            this.dropboxTokenDisplay = '';
          }
        }
      }
    );
  }

  edit() {
    this.userService.navigateToEditUser(this.user.id);
  }
}
