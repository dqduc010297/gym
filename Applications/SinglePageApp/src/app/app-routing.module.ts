import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Role } from './core/const/role';
import { AuthGuard } from './core/guards/auth.guard';
import { RoleGuard } from './core/guards/role.guard';
import { LayoutComponent } from './shared/components/layout/layout.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  {
    path: '', component: LayoutComponent, canActivate: [AuthGuard], children: [
      // { path: 'home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },
      // { path: 'timesheet', loadChildren: () => import('./features/timesheet/timesheet.module').then(m => m.TimesheetModule) },
      // { path: 'goal', loadChildren: () => import('./features/goal/goal.module').then(m => m.GoalModule) },
      // { path: 'inbody', loadChildren: () => import('./features/inbody/inbody.module').then(m => m.InbodyModule) },
      {
        path: 'user',
        loadChildren: () => import('./user/user.module').then(m => m.UserModule),
        canActivate: [RoleGuard], data: { expectedRole: Role.SYS_ADMIN.toString() }
      },
      { path: 'album', loadChildren: () => import('./album/album.module').then(m => m.AlbumModule) },
    ]
  },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
