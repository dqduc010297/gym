import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './pages/user/user.component';
import { SharedModule } from '../shared/share.module';
import { DetailComponent } from './components/detail/detail.component';
import { InbodyModule } from '../inbody/inbody.module';


@NgModule({
  declarations: [
    UserComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    InbodyModule,
    SharedModule.forRoot(),
  ]
})
export class UserModule { }
