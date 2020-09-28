import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';
import { SharedModule } from 'src/app/shared/share.module';
import { WeightHistoryComponent } from './components/weight-history/weight-history.component';
import { SmmHistoryComponent } from './components/smm-history/smm-history.component';
import { PbfHistoryComponent } from './components/pbf-history/pbf-history.component';
import { InBodyService } from 'src/app/services/inbody/inbody.service';

@NgModule({
  declarations: [
    HomeComponent,
    WeightHistoryComponent,
    SmmHistoryComponent,
    PbfHistoryComponent,
  ],
  imports: [
    HomeRoutingModule,
    NgxEchartsModule.forRoot({
      echarts
    }),
    SharedModule.forRoot(),
  ],
  providers: [
    InBodyService
  ]
})
export class HomeModule { }
