import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MealPlanComponent } from './pages/meal-plan/meal-plan.component';


const routes: Routes = [
  { path: '', component: MealPlanComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MealPlanRoutingModule { }
