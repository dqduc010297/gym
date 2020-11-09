import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditUserComponent } from './pages/edit-user/edit-user.component';
import { NewUserComponent } from './pages/new-user/new-user.component';
import { UserComponent } from './pages/user/user.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  { path: 'detail/:id', component: UserComponent },
  { path: 'edit/:id', component: EditUserComponent },
  { path: 'new', component: NewUserComponent },
  { path: '', component: UsersComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule { }
