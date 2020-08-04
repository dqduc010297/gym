import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body-composition-analysis',
  templateUrl: './body-composition-analysis.component.html',
  styleUrls: ['./body-composition-analysis.component.scss']
})
export class BodyCompositionAnalysisComponent implements OnInit {
  date: any;
  constructor() { }

  ngOnInit(): void {
  }
  onChange(result: Date): void {
    console.log('onChange: ', result);
  }
}
