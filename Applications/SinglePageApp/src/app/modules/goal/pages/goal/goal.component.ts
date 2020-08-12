import { Component, OnInit } from '@angular/core';
import { Nutrition } from '../../models/nutrition';
import { WorkOut, Exercise } from '../../models/exercise';
import { GoalOverviewMock } from 'src/app/mocks/goal-overview.mock';
import { GoalOverview, Goal } from '../../models/goal';
import { GoalMock } from 'src/app/mocks/goal.mock';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { Observable, Observer } from 'rxjs';
import { FileService } from 'src/app/services/core/file.service';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.scss']
})
export class GoalComponent implements OnInit {
  goalOverviews: GoalOverview[] = [];
  goal: Goal = new Goal();

  goalIdSelected: number;

  constructor(
    private goalOverviewMock: GoalOverviewMock,
    private goalMock: GoalMock,
  ) { }

  ngOnInit(): void {
    this.goalOverviewMock.doMock().subscribe(
      result => {
        this.goalOverviews = result;
        if (this.goalOverviews) {
          this.loadGoal(this.goalOverviews[0].id);
        }
      }
    );
  }

  loadGoal(id: number) {
    this.goalMock.doMock(id).subscribe(
      result => {
        this.goal = result;
      }
    );
  }

  goalOverviewSelected(event) {
    this.loadGoal(event);
  }
}
