import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GoalOverview } from '../../models/goal';
import { Router } from '@angular/router';
import { GoalOverviewMock } from 'src/app/mocks/goal-overview.mock';

@Component({
  selector: 'app-goal-timeline',
  templateUrl: './goal-timeline.component.html',
  styleUrls: ['./goal-timeline.component.scss']
})
export class GoalTimelineComponent implements OnInit {
  @Input() goalOverviews: GoalOverview[] = [];

  constructor(
    private router: Router,
    private goalOverviewMock: GoalOverviewMock
  ) { }

  ngOnInit(): void {
    this.goalOverviewMock.doMock().subscribe(
      result => {
        this.goalOverviews = result;
      }
    );
  }

  selected(id: number) {
    this.router.navigate([`goal/${id}`]);
  }
}
