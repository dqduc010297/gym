import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InbodyComponent } from './pages/inbody/inbody.component';
import { UserComponent } from './pages/user/user.component';

const routes: Routes = [
  { path: 'user/:id', component: UserComponent, },
  { path: 'inbody/:id', component: InbodyComponent, },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WizardRoutingModule { }
