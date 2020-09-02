import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { SharedModule } from 'src/app/share.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule.forRoot(),
  ]
})
export class BlogModule { }
