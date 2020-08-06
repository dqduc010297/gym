import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoalRoutingModule } from './goal-routing.module';
import { GoalComponent } from './pages/goal/goal.component';
import { SharedModule } from 'src/app/share.module';
import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';
import { InbodyGoalComponent } from './components/inbody-goal/inbody-goal.component';

@NgModule({
  declarations: [
    GoalComponent,
    InbodyGoalComponent,
  ],
  imports: [
    CommonModule,
    GoalRoutingModule,
    SharedModule.forRoot(),
    NgxEchartsModule.forRoot({
      echarts
    }),
  ]
})
export class GoalModule { }
