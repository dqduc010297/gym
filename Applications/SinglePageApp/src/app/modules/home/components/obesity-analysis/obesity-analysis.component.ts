import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-obesity-analysis',
  templateUrl: './obesity-analysis.component.html',
  styleUrls: ['./obesity-analysis.component.scss']
})
export class ObesityAnalysisComponent implements OnInit {
  checkOptionsOne = [
    { label: 'Normal', value: 'Normal' },
    { label: 'Under', value: 'Under' },
    { label: 'Slightly Over', value: 'SlightlyOver' },
    { label: 'Over', value: 'Over', checked: true  }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
