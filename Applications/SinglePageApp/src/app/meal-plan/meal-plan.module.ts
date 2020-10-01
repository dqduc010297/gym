import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MealPlanRoutingModule } from './meal-plan-routing.module';
import { MealPlanComponent } from './pages/meal-plan/meal-plan.component';
import { SharedModule } from '../shared/share.module';
import { MealPeriodComponent } from './components/meal-period/meal-period.component';


@NgModule({
  declarations: [MealPlanComponent, MealPeriodComponent],
  imports: [
    CommonModule,
    MealPlanRoutingModule,
    SharedModule.forRoot(),
  ]
})
export class MealPlanModule { }
