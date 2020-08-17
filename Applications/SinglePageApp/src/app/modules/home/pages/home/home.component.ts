import { Component, OnInit } from '@angular/core';
import { InBodyService } from 'src/app/services/inbody/inbody.service';
import { InBodyDetail } from 'src/app/models/inbody/inbody-detail';
import { LoaderService } from 'src/app/services/core/loader.service';
import { TestedDates } from 'src/app/models/inbody/tested-date';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  inBodyDetail: InBodyDetail = new InBodyDetail();
  testedDates: Date[] = [];

  testedDatePicker: Date;

  constructor(
    private inBodyService: InBodyService,
    public loaderService: LoaderService,
    private datePipe: DatePipe
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
    console.log(testedDate);
    this.inBodyService.getInBody(testedDate).subscribe(
      result => {
        this.inBodyDetail = result;
      }
    );
  }

  getTestedDate() {
    this.inBodyService.getTestedDates().subscribe(
      result => {
        this.testedDates = result;
        this.testedDates.forEach(element => {
          return this.datePipe.transform(element, 'yyyy-MM-dd');
        });
        console.log(this.testedDates);
      }
    );
  }

  disabledDate(current) {
    console.log(current);
    console.log(this.testedDates);
    return true;
  }
}
