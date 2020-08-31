import { Component, OnInit, Input } from '@angular/core';
import { GoalStatus } from 'src/app/const/goal';

@Component({
  selector: 'app-goal-result',
  templateUrl: './goal-result.component.html',
  styleUrls: ['./goal-result.component.scss']
})
export class GoalResultComponent implements OnInit {
  @Input() status = GoalStatus.Init;
  @Input() description: string;

  goalStatus = GoalStatus;

  constructor() { }

  ngOnInit(): void {
  }

}
