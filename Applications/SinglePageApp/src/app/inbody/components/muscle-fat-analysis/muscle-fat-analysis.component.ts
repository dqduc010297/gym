import { Component, OnInit, Input } from '@angular/core';
import { MuscleFatAnalysis } from '../../core/models/muscle-fat-analysis';
@Component({
  selector: 'app-muscle-fat-analysis',
  templateUrl: './muscle-fat-analysis.component.html',
  styleUrls: ['./muscle-fat-analysis.component.scss']
})
export class MuscleFatAnalysisComponent implements OnInit {
  @Input() muscleFatAnalysis: MuscleFatAnalysis;
  constructor() { }

  ngOnInit(): void {
  }
}
