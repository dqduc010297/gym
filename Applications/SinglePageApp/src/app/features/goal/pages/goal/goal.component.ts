import { Component, OnInit } from '@angular/core';
import { GoalOverviewMock } from 'src/app/core/mocks/goal-overview.mock';
import { GoalOverview } from '../../models/goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.scss']
})
export class GoalComponent implements OnInit {
  goalOverviews: GoalOverview[] = [];
  goalIdSelected: number;

  constructor(
    private goalOverviewMock: GoalOverviewMock,
  ) { }

  ngOnInit(): void {
    this.goalOverviewMock.doMock().subscribe(
      result => {
        this.goalOverviews = result;
      }
    );
  }

  goalOverviewSelected(event) {
    // this.loadGoal(event);
  }

  onValueChange(value: Date): void {
    console.log(`Current value: ${value}`);
  }

  onPanelChange(change: { date: Date; mode: string }): void {
    console.log(`Current value: ${change.date}`);
    console.log(`Current mode: ${change.mode}`);
  }
  onChange(result: Date): void {
    console.log('onChange: ', result);
  }
}
