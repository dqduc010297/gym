import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MealPlanRoutingModule } from './meal-plan-routing.module';
import { MealPlanComponent } from './pages/meal-plan/meal-plan.component';
import { SharedModule } from '../shared/share.module';
import { MealPeriodComponent } from './components/meal-period/meal-period.component';

import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';
import { MealComponent } from './components/meal/meal.component';
import { MealPlanOverviewComponent } from './components/meal-plan-overview/meal-plan-overview.component';
import { EditableMealPeriodComponent } from './components/editable-meal-period/editable-meal-period.component';

@NgModule({
  declarations: [
    MealPlanComponent,
    MealPeriodComponent,
    MealComponent,
    EditableMealPeriodComponent,
    MealPlanOverviewComponent,
  ],
  imports: [
    CommonModule,
    MealPlanRoutingModule,
    NgxEchartsModule.forRoot({
      echarts
    }),
    SharedModule.forRoot(),
  ]
})
export class MealPlanModule { }
