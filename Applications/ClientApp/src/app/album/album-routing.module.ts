import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumComponent } from './pages/album/album.component';


const routes: Routes = [
  { path: '', component: AlbumComponent },
  { path: 'detail', component: AlbumComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumRoutingModule { }
