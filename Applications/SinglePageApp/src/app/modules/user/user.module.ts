import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './pages/user/user.component';
import { SharedModule } from 'src/app/share.module';


@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule.forRoot(),
  ]
})
export class UserModule { }
