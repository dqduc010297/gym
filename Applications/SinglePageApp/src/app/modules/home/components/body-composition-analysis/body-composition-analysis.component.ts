import { Component, OnInit, Input } from '@angular/core';
import { BodyCompositionAnalysis } from 'src/app/models/inbody/body-composition-analysis';

@Component({
  selector: 'app-body-composition-analysis',
  templateUrl: './body-composition-analysis.component.html',
  styleUrls: ['./body-composition-analysis.component.scss']
})
export class BodyCompositionAnalysisComponent implements OnInit {
  @Input() bodyCompositionAnalysis: BodyCompositionAnalysis = new BodyCompositionAnalysis();
  constructor() { }

  ngOnInit(): void {
  }
}
