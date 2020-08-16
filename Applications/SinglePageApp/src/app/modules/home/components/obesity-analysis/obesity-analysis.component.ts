import { Component, OnInit, Input } from '@angular/core';
import { ObesityAnalysis } from 'src/app/models/inbody/obesity-analysis';

@Component({
  selector: 'app-obesity-analysis',
  templateUrl: './obesity-analysis.component.html',
  styleUrls: ['./obesity-analysis.component.scss']
})
export class ObesityAnalysisComponent implements OnInit {
  @Input() obesityAnalysis: ObesityAnalysis;

  bmiEvaluation = [
    { label: 'Normal', value: 0 },
    { label: 'Under', value: 1 },
    { label: 'Slightly Over', value: 2 },
    { label: 'Over', value: 3 }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
