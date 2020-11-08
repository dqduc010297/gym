import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoleOptions } from 'src/app/core/const/role';
import { LoaderService } from 'src/app/core/services/loader.service';
import { UserRequest } from 'src/app/user-managements/models/user.request';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  roleOptions = RoleOptions;

  constructor(
    public loaderService: LoaderService,
    private activateRoute: ActivatedRoute,
    public userService: UserService,
  ) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(
      params => {
        // tslint:disable-next-line: radix
        this.userService.loadUser();
      }
    );
  }

  save() {
    this.userService.save();
  }

  discard() {
    this.userService.discard();
  }

  uploaded(event) { }
}
