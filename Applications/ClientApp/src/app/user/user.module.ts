import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './pages/user/user.component';
import { SharedModule } from 'src/app/shared/share.module';
import { UserFormComponent } from './components/user-form/user-form.component';
import { InitPageComponent } from './components/init-page/init-page.component';


@NgModule({
  declarations: [
    UserComponent,
    UserFormComponent,
    InitPageComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule.forRoot(),
  ],
  exports: [
    UserFormComponent,
  ]
})
export class UserModule { }
