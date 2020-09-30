import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GoalMock } from 'src/app/core/mocks/goal.mock';
import { Goal } from '../../models/goal';

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

  uploaded(event) {
    console.log(event);
  }
}
