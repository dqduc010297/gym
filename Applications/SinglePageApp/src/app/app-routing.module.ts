import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  {
    path: '', component: LayoutComponent, canActivate: [AuthGuard], children: [
      { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
      { path: 'timesheet', loadChildren: () => import('./modules/timesheet/timesheet.module').then(m => m.TimesheetModule) },
      { path: 'goal', loadChildren: () => import('./modules/goal/goal.module').then(m => m.GoalModule) },
      { path: 'inbody', loadChildren: () => import('./modules/inbody/inbody.module').then(m => m.InbodyModule) },
      { path: 'user', loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule) },
      { path: 'album', loadChildren: () => import('./modules/album/album.module').then(m => m.AlbumModule) },
    ]
  },
  { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
