import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-muscle-fat-analysis',
  templateUrl: './muscle-fat-analysis.component.html',
  styleUrls: ['./muscle-fat-analysis.component.scss']
})
export class MuscleFatAnalysisComponent implements OnInit {
  date: any;
  constructor() { }

  ngOnInit(): void {
  }
  onChange(result: Date): void {
    console.log('onChange: ', result);
  }
}
