import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InbodyComponent } from './pages/inbody/inbody.component';
import { NewInbodyComponent } from './pages/new-inbody/new-inbody.component';

const routes: Routes = [
  { path: 'list', component: InbodyComponent },
  { path: 'new', component: NewInbodyComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InbodyRoutingModule { }
