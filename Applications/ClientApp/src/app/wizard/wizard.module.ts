import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WizardRoutingModule } from './wizard-routing.module';
import { UserComponent } from './pages/user/user.component';
import { SharedModule } from '../shared/share.module';
import { InbodyComponent } from './pages/inbody/inbody.component';


@NgModule({
  declarations: [UserComponent, InbodyComponent],
  imports: [
    CommonModule,
    WizardRoutingModule,
    SharedModule.forRoot(),
  ]
})
export class WizardModule { }
