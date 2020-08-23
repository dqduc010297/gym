import { Component, OnInit } from '@angular/core';
import { InBodyService } from 'src/app/services/inbody/inbody.service';
import { BodyCompositionHistory } from 'src/app/models/inbody/body-composition-history';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  weights: number[];
  testedDates: string[] = [];

  constructor(
    private inBodyService: InBodyService,
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.inBodyService.getBodyCompositionHistories().subscribe(
      result => {
        this.testedDates = result.map(p => this.datePipe.transform(p.testedDate, 'dd/MM/yyyy'));
        this.weights = result.map(p => p.weight);
      }
    );
  }
}
