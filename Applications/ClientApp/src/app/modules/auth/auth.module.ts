import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
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
