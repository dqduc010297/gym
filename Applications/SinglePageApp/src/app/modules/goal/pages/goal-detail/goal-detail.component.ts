import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Goal } from '../../models/goal';
import { GoalMock } from 'src/app/mocks/goal.mock';

@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.scss']
})
export class GoalDetailComponent implements OnInit {
  goal: Goal = new Goal();

  constructor(
    private activatedRoute: ActivatedRoute,
    private goalMock: GoalMock,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      param => {
        this.loadGoal(Number(param.id));
      }
    );

  }
  loadGoal(id: number) {
    this.goalMock.doMock(id).subscribe(
      result => {
        this.goal = result;
        console.log(this.goal);
      }
    );
  }
}
