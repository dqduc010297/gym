import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { InBodyPaperMapper } from 'src/app/core/mapper/inbody-paper-mapper';
import { LoaderService } from 'src/app/core/services/loader.service';
import { InBodyPaper } from '../../core/models/inbody-papaer';
import { InBodyRequest } from '../../core/models/inbody.request';
import { InBodyAPIService } from '../../core/services/inbody.api.service';

@Component({
  selector: 'app-inbody',
  templateUrl: './inbody.component.html',
  styleUrls: ['./inbody.component.scss']
})
export class InbodyComponent implements OnInit {
  testedDates: string[] = [];
  testedDatePicker: Date;
  myInBodyRequest: InBodyRequest = new InBodyRequest(this.deviceService);

  inBodyPaper: InBodyPaper = new InBodyPaper();
  isEmptyData = true;

  constructor(
    private inBodyAPIService: InBodyAPIService,
    public loaderService: LoaderService,
    public datePipe: DatePipe,
    private deviceService: DeviceDetectorService,
    private inBodyMPaperMapper: InBodyPaperMapper,
  ) { }

  listOfData: number[] = [1];

  ngOnInit(): void {
    this.getTestedDate();
    this.loadLatestMyInBody();
  }

  loadLatestMyInBody() {
    console.log(this.myInBodyRequest);
    this.inBodyAPIService.getInBody(this.myInBodyRequest).subscribe(
      result => {
        if (!result) {
          this.isEmptyData = true;
          return;
        }
        this.isEmptyData = false;
        this.inBodyPaper = this.inBodyMPaperMapper.map(result);
        this.testedDatePicker = this.inBodyPaper.testedDate;
      }
    );
  }

  onChange(testedDate: Date): void {
    this.myInBodyRequest.testedDate = testedDate;
    this.inBodyAPIService.getInBody(this.myInBodyRequest).subscribe(
      result => {
        this.inBodyPaper = this.inBodyMPaperMapper.map(result);
      }
    );
  }

  getTestedDate() {
    this.inBodyAPIService.getTestedDates().subscribe(
      result => {
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

  format = () => `${this.inBodyPaper.score.toString()}/100`;
}
