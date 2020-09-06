import { Component, OnInit } from '@angular/core';
import { InBodyDetail } from 'src/app/models/inbody/inbody-detail';
import { InBodyService } from 'src/app/services/inbody/inbody.service';
import { LoaderService } from 'src/app/services/core/loader.service';
import { DatePipe } from '@angular/common';
import { DeviceDetectorService } from 'ngx-device-detector';
import { MyInBodyRq } from 'src/app/models/inbody/my-inbody-rq';
import { BodyCompositionAnalysis } from 'src/app/models/inbody/body-composition-analysis';
import { MuscleFatAnalysis } from 'src/app/models/inbody/muscle-fat-analysis';
import { ObesityAnalysis } from 'src/app/models/inbody/obesity-analysis';
import { TestedResult } from 'src/app/models/inbody/tested-result';

@Component({
  selector: 'app-inbody',
  templateUrl: './inbody.component.html',
  styleUrls: ['./inbody.component.scss']
})
export class InbodyComponent implements OnInit {
  inBodyDetail: InBodyDetail = new InBodyDetail();
  testedDates: string[] = [];
  testedDatePicker: Date;
  myInBodyRequest: MyInBodyRq = new MyInBodyRq(this.deviceService);

  bodyCompositionAnalysis: BodyCompositionAnalysis = new BodyCompositionAnalysis();
  muscleFatAnalysis: MuscleFatAnalysis = new MuscleFatAnalysis();
  obesityAnalysis: ObesityAnalysis = new ObesityAnalysis();

  constructor(
    private inBodyService: InBodyService,
    public loaderService: LoaderService,
    public datePipe: DatePipe,
    private deviceService: DeviceDetectorService
  ) { }

  listOfData: number[] = [1];

  ngOnInit(): void {
    this.getTestedDate();
    this.loadLatestMyInBody();
  }

  loadLatestMyInBody() {
    this.inBodyService.getInBody(this.myInBodyRequest).subscribe(
      result => {
        this.inBodyDetail = result;
        this.testedDatePicker = this.inBodyDetail.testedDate;
      }
    );
  }

  onChange(testedDate: Date): void {
    this.myInBodyRequest.testedDate = testedDate;
    this.inBodyService.getInBody(this.myInBodyRequest).subscribe(
      result => {
        this.inBodyDetail = result;
      }
    );
  }

  getTestedDate() {
    this.inBodyService.getTestedDates().subscribe(
      result => {
        // tslint:disable-next-line: no-shadowed-variable
        result.forEach(element => {
          this.testedDates.push(element.toString().substring(0, 10));
        });
      }
    );
  }

  disabledDate = (current: Date): boolean => {
    if (this.testedDates) {
      return this.testedDates.indexOf(this.datePipe.transform(current, 'yyyy-MM-dd')) === -1;
    }
    return true;
  }

  checkDate(current) {
    if (this.testedDates) {
      return this.testedDates.indexOf(this.datePipe.transform(current, 'yyyy-MM-dd')) > -1;
    }
    return false;
  }

  mapData(inBodyDetail: InBodyDetail) {
    this.bodyCompositionAnalysis = this.mapBodyCompositionAnalysis(inBodyDetail);
  }

  mapBodyCompositionAnalysis(inBodyDetail: InBodyDetail): BodyCompositionAnalysis {
    return {
      bodyWater: {
        value: inBodyDetail.bodyWater,
        max: inBodyDetail.inBodyStandard.bodyWaterMax,
        min: inBodyDetail.inBodyStandard.bodyWaterMin,
        testedEvaluation: ''
      },
      protein: {
        value: inBodyDetail.bodyWater,
        max: inBodyDetail.inBodyStandard.bodyWaterMax,
        min: inBodyDetail.inBodyStandard.bodyWaterMin,
        testedEvaluation: ''
      },
      mineral: {
        value: inBodyDetail.bodyWater,
        max: inBodyDetail.inBodyStandard.bodyWaterMax,
        min: inBodyDetail.inBodyStandard.bodyWaterMin,
        testedEvaluation: ''
      },
      bodyFatMass: {
        value: inBodyDetail.bodyWater,
        max: inBodyDetail.inBodyStandard.bodyWaterMax,
        min: inBodyDetail.inBodyStandard.bodyWaterMin,
        testedEvaluation: ''
      },
    };
  }
}
