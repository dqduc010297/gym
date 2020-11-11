import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { ErrorPageComponent } from './shared/components/error-page/error-page.component';
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
        loadChildren: () => import('./user-management/user-management.module').then(m => m.UserManagementModule)
      },
      {
        path: 'meal-plan',
        loadChildren: () => import('./meal-plan/meal-plan.module').then(m => m.MealPlanModule),
      },
      { path: 'album', loadChildren: () => import('./album/album.module').then(m => m.AlbumModule) },
      { path: 'error-page', component: ErrorPageComponent },
      { path: 'wizard', loadChildren: () => import('./wizard/wizard.module').then(m => m.WizardModule) },
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
