import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ObesityAnalysis } from 'src/app/models/inbody/obesity-analysis';
import { Evaluation } from 'src/app/models/inbody/tested-result';

@Component({
  selector: 'app-obesity-analysis',
  templateUrl: './obesity-analysis.component.html',
  styleUrls: ['./obesity-analysis.component.scss']
})
export class ObesityAnalysisComponent implements OnInit {
  @Input() obesityAnalysis: ObesityAnalysis;

  evaluation = Evaluation;
  constructor() { }

  ngOnInit(): void {
  }
}
