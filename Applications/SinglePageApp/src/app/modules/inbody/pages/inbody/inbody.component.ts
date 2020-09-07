import { Component, OnInit } from '@angular/core';
import { InBodyDetail } from 'src/app/models/inbody/inbody-detail';
import { InBodyService } from 'src/app/services/inbody/inbody.service';
import { LoaderService } from 'src/app/services/core/loader.service';
import { DatePipe } from '@angular/common';
import { DeviceDetectorService } from 'ngx-device-detector';
import { MyInBodyRq } from 'src/app/models/inbody/my-inbody-rq';
import { InBodyPaper } from 'src/app/models/inbody/inbody-papaer';
import { InBodyPaperMapper } from 'src/app/services/mapper/inbody-paper-mapper';

@Component({
  selector: 'app-inbody',
  templateUrl: './inbody.component.html',
  styleUrls: ['./inbody.component.scss']
})
export class InbodyComponent implements OnInit {
  testedDates: string[] = [];
  testedDatePicker: Date;
  myInBodyRequest: MyInBodyRq = new MyInBodyRq(this.deviceService);

  inBodyPaper: InBodyPaper = new InBodyPaper();

  constructor(
    private inBodyService: InBodyService,
    public loaderService: LoaderService,
    public datePipe: DatePipe,
    private deviceService: DeviceDetectorService,
    private inBodyMPaperMapper: InBodyPaperMapper
  ) { }

  listOfData: number[] = [1];

  ngOnInit(): void {
    this.getTestedDate();
    this.loadLatestMyInBody();
  }

  loadLatestMyInBody() {
    this.inBodyService.getInBody(this.myInBodyRequest).subscribe(
      result => {
        this.inBodyPaper = this.inBodyMPaperMapper.map(result);
        this.testedDatePicker = this.inBodyPaper.testedDate;
      }
    );
  }

  onChange(testedDate: Date): void {
    this.myInBodyRequest.testedDate = testedDate;
    this.inBodyService.getInBody(this.myInBodyRequest).subscribe(
      result => {
        this.inBodyPaper = this.inBodyMPaperMapper.map(result);
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
}
