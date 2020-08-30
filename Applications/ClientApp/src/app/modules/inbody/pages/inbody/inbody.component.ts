import { Component, OnInit } from '@angular/core';
import { InBodyDetail } from 'src/app/models/inbody/inbody-detail';
import { InBodyService } from 'src/app/services/inbody/inbody.service';
import { LoaderService } from 'src/app/services/core/loader.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-inbody',
  templateUrl: './inbody.component.html',
  styleUrls: ['./inbody.component.scss']
})
export class InbodyComponent implements OnInit {
  inBodyDetail: InBodyDetail = new InBodyDetail();
  testedDates: string[] = [];

  testedDatePicker: Date;
  bsInlineValue = new Date();
  bsInlineRangeValue: Date[];
  maxDate = new Date();
  constructor(
    private inBodyService: InBodyService,
    public loaderService: LoaderService,
    public datePipe: DatePipe
  ) { }

  listOfData: number[] = [1];

  ngOnInit(): void {
    this.getTestedDate();
    this.loadLatestMyInBody();
  }

  loadLatestMyInBody() {
    this.inBodyService.getLatestInBody().subscribe(
      result => {
        this.inBodyDetail = result;
        this.testedDatePicker = this.inBodyDetail.testedDate;
      }
    );
  }

  loadMyInBody() {
    this.inBodyService.getLatestInBody().subscribe(
      result => {
        this.inBodyDetail = result;
        this.testedDatePicker = this.inBodyDetail.testedDate;
      }
    );
  }

  onChange(testedDate: Date): void {
    this.inBodyService.getInBody(testedDate).subscribe(
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
