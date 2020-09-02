import { Component, OnInit } from '@angular/core';
import { InBodyService } from 'src/app/services/inbody/inbody.service';
import { BodyCompositionHistory } from 'src/app/models/inbody/body-composition-history';
import { DatePipe } from '@angular/common';
import { LoaderService } from 'src/app/services/core/loader.service';
import { DeviceDetectorService } from 'ngx-device-detector';
import { FilterRequest } from 'src/app/models/core/filter.request';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  weights: number[] = [];
  smm: number[] = [];
  pbf: number[] = [];
  testedDates: string[] = [];
  inBodyFilter: FilterRequest = new FilterRequest();

  constructor(
    private inBodyService: InBodyService,
    private datePipe: DatePipe,
    public loaderService: LoaderService,
    private deviceDetectorService: DeviceDetectorService
  ) { }

  ngOnInit(): void {
    this.inBodyFilter.skip = 0;
    this.inBodyFilter.take = this.deviceDetectorService.isDesktop() ? 8 : this.deviceDetectorService.isTablet() ? 6 : 4;
    this.inBodyService.getBodyCompositionHistories(this.inBodyFilter).subscribe(
      result => {
        this.testedDates = result.map(p => this.datePipe.transform(p.testedDate, 'dd/MM/yyyy'));
        this.weights = result.map(p => p.weight);
        this.smm = result.map(p => p.skeletalMuscleMass);
        this.pbf = result.map(p => p.percentBodyFat);
      }
    );
  }
}
