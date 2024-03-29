import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumRoutingModule } from './album-routing.module';
import { AlbumComponent } from './pages/album/album.component';
import { SharedModule } from 'src/app/shared/share.module';
import { AlbumGirdComponent } from './components/album-gird/album-gird.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';


@NgModule({
  declarations: [
    AlbumComponent,
    AlbumGirdComponent

  ],
  imports: [
    CommonModule,
    AlbumRoutingModule,

    LazyLoadImageModule,
    SharedModule.forRoot(),
  ]
})
export class AlbumModule { }
