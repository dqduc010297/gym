import { Component, OnInit, Input } from '@angular/core';
import { InBodyGoal } from '../../models/goal';

@Component({
  selector: 'app-inbody-goal',
  templateUrl: './inbody-goal.component.html',
  styleUrls: ['./inbody-goal.component.scss']
})
export class InbodyGoalComponent implements OnInit {
  @Input() inbodyGoal: InBodyGoal = new InBodyGoal();

  constructor() { }

  ngOnInit(): void {
    console.log(this.inbodyGoal);
  }
}
