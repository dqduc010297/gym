import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagementRoutingModule } from './user-management-routing.module';
import { UsersComponent } from './pages/users/users.component';
import { NewUserComponent } from './pages/new-user/new-user.component';
import { EditUserComponent } from './pages/edit-user/edit-user.component';
import { UserComponent } from './pages/user/user.component';
import { SharedModule } from '../shared/share.module';


@NgModule({
  declarations: [
    UsersComponent,
    NewUserComponent,
    EditUserComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    UserManagementRoutingModule,
    SharedModule.forRoot(),
  ]
})
export class UserManagementModule { }
