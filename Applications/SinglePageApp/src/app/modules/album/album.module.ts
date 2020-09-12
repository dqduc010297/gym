import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumRoutingModule } from './album-routing.module';
import { AlbumComponent } from './pages/album/album.component';
import { SharedModule } from 'src/app/share.module';
import { AlbumDetailComponent } from './components/album-detail/album-detail.component';


@NgModule({
  declarations: [
    AlbumComponent,
    AlbumDetailComponent,
  ],
  imports: [
    CommonModule,
    AlbumRoutingModule,
    SharedModule.forRoot(),
  ]
})
export class AlbumModule { }
