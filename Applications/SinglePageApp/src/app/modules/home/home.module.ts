import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';
import { SharedModule } from 'src/app/share.module';
import { BodyCompositionAnalysisComponent } from './components/body-composition-analysis/body-composition-analysis.component';
import { MuscleFatAnalysisComponent } from './components/muscle-fat-analysis/muscle-fat-analysis.component';
import { ObesityAnalysisComponent } from './components/obesity-analysis/obesity-analysis.component';
import { InbodyInfoComponent } from './components/inbody-info/inbody-info.component';
import { BodyCompositionHistoryComponent } from './components/body-composition-history/body-composition-history.component';

@NgModule({
  declarations: [
    HomeComponent,
    BodyCompositionAnalysisComponent,
    MuscleFatAnalysisComponent,
    ObesityAnalysisComponent,
    InbodyInfoComponent,
    BodyCompositionHistoryComponent,
  ],
  imports: [
    HomeRoutingModule,
    NgxEchartsModule.forRoot({
      echarts
    }),
    SharedModule.forRoot(),
  ],
  providers: []
})
export class HomeModule { }
