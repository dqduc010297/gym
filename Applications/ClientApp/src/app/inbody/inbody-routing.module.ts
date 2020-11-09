import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClaimGuard } from '../core/guards/claim.guard';
import { InbodyComponent } from './pages/inbody/inbody.component';
import { NewInbodyComponent } from './pages/new-inbody/new-inbody.component';

const routes: Routes = [
  { path: '', component: InbodyComponent },
  {
    path: 'new',
    component: NewInbodyComponent,
    // canActivate: [ClaimGuard],
    // data: { claimName: 'canCreateInBody' }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InbodyRoutingModule { }
