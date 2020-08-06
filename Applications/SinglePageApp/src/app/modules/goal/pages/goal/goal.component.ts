import { Component, OnInit } from '@angular/core';
import { Nutrition } from '../../models/nutrition';
import { WorkOut, Exercise } from '../../models/exercise';
import { GoalOverviewMock } from 'src/app/mocks/goal-overview.mock';
import { GoalOverview, Goal } from '../../models/goal';
import { GoalMock } from 'src/app/mocks/goal.mock';

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

  constructor(
    private goalOverviewMock: GoalOverviewMock,
    private goalMock: GoalMock,
  ) { }

  ngOnInit(): void {
    for (let i = 0; i < 11; i++) {
      this.nutritions.push({
        date: new Date(`07/${i + 11}/2020`),
        breakfast: 'assets/images/nutritions/pho.jpg',
        lunch: 'assets/images/nutritions/lunch.jpg',
        dinner: 'assets/images/nutritions/dinner.jpg',
        extra1: 'assets/images/nutritions/guava.jpg',
        extra2: 'assets/images/nutritions/banana.jpg'
      });

      this.workOuts.push({
        date: new Date(`07/${i + 11}/2020`),
        exercises: [
          {
            name: 'Plank',
            set: 4,
            rep: 12,
            restTime: 10,
            remarks: '',
          },
          {
            name: 'Moutain Climber',
            set: 4,
            rep: 20,
            restTime: 10,
            remarks: '',
          },
          {
            name: 'Flyingjacks',
            set: 4,
            rep: 20,
            restTime: 10,
            remarks: '',
          },
          {
            name: 'Jumping Jacks',
            set: 4,
            rep: 20,
            restTime: 10,
            remarks: '',
          },
          {
            name: 'Burpees',
            set: 4,
            rep: 20,
            restTime: 10,
            remarks: '',
          },
        ]
      });
    }

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
}
