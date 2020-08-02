import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgZorroAntModule } from 'src/app/ng-zorro-antd.module';
import { SharedModule } from 'src/app/share.module';

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    AuthRoutingModule,
    SharedModule.forRoot(),
  ],
})
export class AuthModule { }
