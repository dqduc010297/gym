import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MealPlanRoutingModule } from './meal-plan-routing.module';
import { MealPlanComponent } from './pages/meal-plan/meal-plan.component';
import { SharedModule } from '../shared/share.module';
import { MealPeriodComponent } from './components/meal-period/meal-period.component';
import { MealPlanSummarizeComponent } from './components/meal-plan-summarize/meal-plan-summarize.component';

import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';
import { MealComponent } from './components/meal/meal.component';
import { NewMealPeriodComponent } from './components/new-meal-period/new-meal-period.component';

@NgModule({
  declarations: [
    MealPlanComponent,
    MealPeriodComponent,
    MealPlanSummarizeComponent,
    MealComponent,
    NewMealPeriodComponent,
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
