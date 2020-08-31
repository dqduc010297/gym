import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoalRoutingModule } from './goal-routing.module';
import { GoalComponent } from './pages/goal/goal.component';
import { SharedModule } from 'src/app/share.module';
import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';
import { InbodyGoalComponent } from './components/inbody-goal/inbody-goal.component';
import { InbodyGoalItemComponent } from './components/inbody-goal-item/inbody-goal-item.component';
import { WorkoutComponent } from './components/workout/workout.component';
import { NutritionComponent } from './components/nutrition/nutrition.component';
import { GoalTimelineComponent } from './components/goal-timeline/goal-timeline.component';
import { InbodyImageComponent } from './components/inbody-image/inbody-image.component';
import { GoalDetailComponent } from './pages/goal-detail/goal-detail.component';

@NgModule({
  declarations: [
    GoalComponent,
    InbodyGoalComponent,
    InbodyGoalItemComponent,
    WorkoutComponent,
    NutritionComponent,
    GoalTimelineComponent,
    InbodyImageComponent,
    GoalDetailComponent,
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
