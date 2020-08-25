import { Component, OnInit, Input } from '@angular/core';
import { TestedResult } from 'src/app/models/inbody/tested-result';

@Component({
  // tslint:disable-next-line: component-selector
  selector: '[app-tested-item]',
  templateUrl: './tested-item.component.html',
  styleUrls: ['./tested-item.component.scss']
})

export class TestedItemComponent implements OnInit {
  @Input() name: string;
  @Input() unit: string;
  @Input() testedResult: TestedResult = new TestedResult();

  constructor() { }

  ngOnInit(): void {
  }

}
