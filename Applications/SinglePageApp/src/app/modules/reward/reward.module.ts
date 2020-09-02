import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RewardRoutingModule } from './reward-routing.module';
import { SharedModule } from 'src/app/share.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RewardRoutingModule,
    SharedModule.forRoot()
  ]
})
export class RewardModule { }
