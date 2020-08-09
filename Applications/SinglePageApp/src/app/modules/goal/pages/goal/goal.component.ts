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
  chartOptions: any;
  updateChartOptions: any;

  nutritions: Nutrition[] = [];
  workOuts: WorkOut[] = [];
  goalOverviews: GoalOverview[] = [];
  goal: Goal = new Goal();

  loading = false;
  avatarUrl?: string;

  constructor(
    private goalOverviewMock: GoalOverviewMock,
    private goalMock: GoalMock,
    private msg: NzMessageService,
    private fileService: FileService
  ) { }

  ngOnInit(): void {
    this.goalOverviewMock.doMock().subscribe(
      result => {
        this.goalOverviews = result;
        console.log(this.goalOverviews);
      }
    );
    this.goalMock.doMock(1).subscribe(
      result => {
        this.goal = result;
        console.log(this.goal);
      }
    );
    this.initChartOption();
  }

  initChartOption() {
    this.chartOptions = {
      tooltip: {
        trigger: 'axis',
      },
      grid: {
        left: '6%',
        right: '6%',
        bottom: '3%',
        top: '0%',
        height: '60'
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        show: false,
        data: [
          '11/07/2020',
          '22/07/2020',
        ]
      },
      yAxis: {
        type: 'value',
        show: false,
        min: 88,
        max: 96
      },
      series: [
        {
          name: 'Weight',
          type: 'line',
          symbolSize: 6,
          label: {
            show: true,
            position: 'top'
          },
          data: [92.7, 90.1]
        },
      ]
    };
  }

  onUpload(files: any) {
    if (files.length !== 1) {
      return;
    }
    this.fileService.upload((files[0] as File)).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        console.log(Math.round(100 * event.loaded / event.total));
      }
      else if (event.type === HttpEventType.Response) {
        console.log('Upload success');
      }
    });
  }
}
