import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { DeviceDetectorService } from 'ngx-device-detector';
import { HomeRequest } from 'src/app/home/core/models/home.request';
import { InBodyAPIService } from 'src/app/inbody/core/services/inbody.api.service';
import { LoaderService } from 'src/app/core/services/loader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isEmptyData = true;
  weights: number[] = [];
  smm: number[] = [];
  pbf: number[] = [];
  testedDates: string[] = [];
  homeRequest: HomeRequest = new HomeRequest(this.deviceDetectorService);

  constructor(
    private inBodyAPIService: InBodyAPIService,
    private datePipe: DatePipe,
    public loaderService: LoaderService,
    private deviceDetectorService: DeviceDetectorService
  ) { }

  ngOnInit(): void {
    this.inBodyAPIService.getBodyCompositionHistories(this.homeRequest).subscribe(
      result => {
        if (result.length === 0) {
          this.isEmptyData = true;
          return;
        }
        console.log(result);
        this.isEmptyData = false;
        this.testedDates = result.map(p => this.datePipe.transform(p.testedDate, 'dd/MM/yyyy'));
        this.weights = result.map(p => p.weight);
        this.smm = result.map(p => p.skeletalMuscleMass);
        this.pbf = result.map(p => p.percentBodyFat);
      }
    );
  }
}
