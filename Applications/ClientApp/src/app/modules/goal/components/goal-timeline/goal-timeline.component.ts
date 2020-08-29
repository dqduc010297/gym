import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GoalOverview } from '../../models/goal';

@Component({
  selector: 'app-goal-timeline',
  templateUrl: './goal-timeline.component.html',
  styleUrls: ['./goal-timeline.component.scss']
})
export class GoalTimelineComponent implements OnInit {
  @Input() goalOverviews: GoalOverview[] = [];
  @Output() goalSelected: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  selected(id: number) {
    this.goalSelected.emit(
      id
    );
  }

}
