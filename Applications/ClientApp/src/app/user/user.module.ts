import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './pages/user/user.component';
import { SharedModule } from '../shared/share.module';
import { InbodyModule } from '../inbody/inbody.module';
import { ProfileComponent } from './components/profile/profile.component';
import { InbodySummarizeComponent } from './components/inbody-summarize/inbody-summarize.component';


@NgModule({
  declarations: [
    UserComponent,
    ProfileComponent,
    InbodySummarizeComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    InbodyModule,
    SharedModule.forRoot(),
  ]
})
export class UserModule { }
