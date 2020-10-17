import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumRoutingModule } from './album-routing.module';
import { AlbumComponent } from './pages/album/album.component';
import { SharedModule } from 'src/app/shared/share.module';
import { AlbumGirdComponent } from './components/album-gird/album-gird.component';
import { DetailComponent } from './components/detail/detail.component';
import { NguiInViewComponent } from './components/ngui-in-view.component';


@NgModule({
  declarations: [
    AlbumComponent,
    AlbumGirdComponent,
    DetailComponent,
    NguiInViewComponent
  ],
  imports: [
    CommonModule,
    AlbumRoutingModule,
    SharedModule.forRoot(),
  ]
})
export class AlbumModule { }
