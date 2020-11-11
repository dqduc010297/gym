import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WizardRoutingModule } from './wizard-routing.module';
import { UserComponent } from './pages/user/user.component';
import { SharedModule } from '../shared/share.module';


@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    WizardRoutingModule,
    SharedModule.forRoot(),
  ]
})
export class WizardModule { }
