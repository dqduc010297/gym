import { NgModule } from '@angular/core';

import * as echarts from 'echarts';
import { InbodyRoutingModule } from './inbody-routing.module';
import { InbodyComponent } from './pages/inbody/inbody.component';
import { NewInbodyComponent } from './pages/new-inbody/new-inbody.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { SharedModule } from 'src/app/share.module';
import { BodyCompositionAnalysisComponent } from './components/body-composition-analysis/body-composition-analysis.component';
import { MuscleFatAnalysisComponent } from './components/muscle-fat-analysis/muscle-fat-analysis.component';
import { ObesityAnalysisComponent } from './components/obesity-analysis/obesity-analysis.component';
import { BodyCompositionHistoryComponent } from './components/body-composition-history/body-composition-history.component';
import { WeighingComponent } from './components/weighing/weighing.component';
import { TestedItemComponent } from './components/tested-item/tested-item.component';


@NgModule({
  declarations: [
    InbodyComponent,
    NewInbodyComponent,
    BodyCompositionAnalysisComponent,
    MuscleFatAnalysisComponent,
    ObesityAnalysisComponent,
    WeighingComponent,
    BodyCompositionHistoryComponent,
    TestedItemComponent,
  ],
  imports: [
    InbodyRoutingModule,
    NgxEchartsModule.forRoot({
      echarts
    }),
    SharedModule.forRoot(),
  ],
})
export class InbodyModule { }
