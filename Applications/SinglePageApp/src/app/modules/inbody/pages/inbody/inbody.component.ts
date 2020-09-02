import { Component, OnInit } from '@angular/core';
import { InBodyDetail } from 'src/app/models/inbody/inbody-detail';
import { InBodyService } from 'src/app/services/inbody/inbody.service';
import { LoaderService } from 'src/app/services/core/loader.service';
import { DatePipe } from '@angular/common';
import { DeviceDetectorService } from 'ngx-device-detector';
import { MyInBodyRq } from 'src/app/models/inbody/my-inbody-rq';

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

  constructor(
    private inBodyService: InBodyService,
    public loaderService: LoaderService,
    public datePipe: DatePipe,
    private deviceService: DeviceDetectorService
  ) { }

  listOfData: number[] = [1];

  ngOnInit(): void {
    console.log(this.myInBodyRequest);
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
}
