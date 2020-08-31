import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GoalOverview } from '../../models/goal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-goal-timeline',
  templateUrl: './goal-timeline.component.html',
  styleUrls: ['./goal-timeline.component.scss']
})
export class GoalTimelineComponent implements OnInit {
  @Input() goalOverviews: GoalOverview[] = [];
  @Output() goalSelected: EventEmitter<number> = new EventEmitter<number>();

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  selected(id: number) {
    this.router.navigate([`goal/${id}`]);
  }

}
