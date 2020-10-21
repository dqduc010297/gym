import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Role } from './core/const/role';
import { AuthGuard } from './core/guards/auth.guard';
import { RoleGuard } from './core/guards/role.guard';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { MediaViewComponent } from './shared/components/media-view/media-view.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  {
    path: '', component: LayoutComponent, canActivate: [AuthGuard], children: [
      { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
      { path: 'timesheet', loadChildren: () => import('./features/timesheet/timesheet.module').then(m => m.TimesheetModule) },
      { path: 'goal', loadChildren: () => import('./features/goal/goal.module').then(m => m.GoalModule) },
      { path: 'inbody', loadChildren: () => import('./inbody/inbody.module').then(m => m.InbodyModule) },
      {
        path: 'user',
        loadChildren: () => import('./user/user.module').then(m => m.UserModule),
        canActivate: [RoleGuard], data: { expectedRole: [Role[Role.SYS_ADMIN]] }
      },
      {
        path: 'meal-plan',
        loadChildren: () => import('./meal-plan/meal-plan.module').then(m => m.MealPlanModule),
        canActivate: [RoleGuard], data: { expectedRole: [Role[Role.SYS_ADMIN]] }
      },
      { path: 'album', loadChildren: () => import('./album/album.module').then(m => m.AlbumModule) },
    ]
  },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'media-view/:id', component: MediaViewComponent, }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
