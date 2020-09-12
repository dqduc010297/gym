import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './pages/user/user.component';
import { UserFormComponent } from './components/user-info/user-form.component';
import { InitPageComponent } from './components/init-page/init-page.component';


const routes: Routes = [
  {
    path: '', component: UserComponent, children: [
      { path: '', component: InitPageComponent },
      { path: ':id', component: UserFormComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
