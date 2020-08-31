import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoalComponent } from './pages/goal/goal.component';
import { GoalDetailComponent } from './pages/goal-detail/goal-detail.component';
import { GoalTimelineComponent } from './pages/goal-timeline/goal-timeline.component';


const routes: Routes = [
  { path: '', component: GoalTimelineComponent },
  { path: ':id', component: GoalDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoalRoutingModule { }
