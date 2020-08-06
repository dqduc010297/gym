import { Component, OnInit, Input } from '@angular/core';
import { GoalOverview } from '../../models/goal';

@Component({
  selector: 'app-goal-timeline',
  templateUrl: './goal-timeline.component.html',
  styleUrls: ['./goal-timeline.component.scss']
})
export class GoalTimelineComponent implements OnInit {
  @Input() goalOverviews: GoalOverview[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
