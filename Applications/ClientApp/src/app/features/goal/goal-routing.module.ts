import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoalComponent } from './pages/goal/goal.component';
import { GoalDetailComponent } from './pages/goal-detail/goal-detail.component';


const routes: Routes = [
  { path: '', component: GoalComponent },
  { path: ':id', component: GoalDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoalRoutingModule { }
