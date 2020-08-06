import { Component, OnInit, Input } from '@angular/core';
import { InBodyGoal } from '../../models/goal';

@Component({
  selector: 'app-inbody-goal',
  templateUrl: './inbody-goal.component.html',
  styleUrls: ['./inbody-goal.component.scss']
})
export class InbodyGoalComponent implements OnInit {
  @Input() inbodyGoal: InBodyGoal;
  weightResult: boolean;
  weightDiff: number;
  weightCalculation: number;

  smmResult: boolean;
  smmDiff: number;
  smmCalculation: number;

  constructor() { }

  ngOnInit(): void {
    this.weightDiff = this.inbodyGoal.weight.result - this.inbodyGoal.weight.start;
    this.weightCalculation = Math.abs(this.weightDiff);
    this.weightResult = this.inbodyGoal.weight.isDecreased ?
      this.inbodyGoal.weight.result <= this.inbodyGoal.weight.expected : this.inbodyGoal.weight.result >= this.inbodyGoal.weight.expected;

    this.smmDiff = this.inbodyGoal.smm.result - this.inbodyGoal.smm.start;
    this.smmCalculation = Math.abs(this.smmDiff);
    this.smmResult = this.inbodyGoal.smm.isDecreased ?
      this.inbodyGoal.smm.result <= this.inbodyGoal.smm.expected : this.inbodyGoal.smm.result >= this.inbodyGoal.smm.expected;
  }

}
