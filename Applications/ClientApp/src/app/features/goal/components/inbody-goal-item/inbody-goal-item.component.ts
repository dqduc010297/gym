import { Component, OnInit, Input } from '@angular/core';
import { InBodyGoal, InBodyGoalItem } from '../../models/goal';

@Component({
  // tslint:disable-next-line: component-selector
  selector: '[app-inbody-goal-item]',
  templateUrl: './inbody-goal-item.component.html',
  styleUrls: ['./inbody-goal-item.component.scss']
})
export class InbodyGoalItemComponent implements OnInit {
  @Input() item: InBodyGoalItem;
  @Input() itemName: string;

  result: boolean;
  diff: number;
  calculation: number;
  isSuccessfull: boolean;

  constructor() { }

  ngOnInit(): void {
    this.diff = this.item.result - this.item.start;
    this.calculation = Math.abs(this.diff);
    this.result = this.item.isDecreased ?
      this.diff <= 0 : this.diff >= 0;
    this.isSuccessfull = this.result && this.calculation >= this.item.expected;
  }
}
