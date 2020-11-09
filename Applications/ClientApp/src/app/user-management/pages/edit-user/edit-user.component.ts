import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoleOptions } from 'src/app/core/const/role';
import { LoaderService } from 'src/app/core/services/loader.service';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  user: User = new User();
  roleOptions = RoleOptions;

  constructor(
    public loaderService: LoaderService,
    private activatedRoute: ActivatedRoute,
    public userService: UserService,
  ) { }

  ngOnInit(): void {
    this.userService.user.subscribe(
      user => {
        if (user) {
          this.user = user;
        } else {
          this.activatedRoute.params.subscribe(
            params => {
              if (params.id) {
                // tslint:disable-next-line: radix
                this.userService.loadUser(Number.parseInt(params.id));
              }
            }
          );
        }
      }
    );
  }

  save() {
    this.userService.save(this.user);
  }

  discard() {
    this.userService.discard();
  }

  uploaded(event: any) {
    this.user.avatarURL = event.uploadedPath;
  }
}
