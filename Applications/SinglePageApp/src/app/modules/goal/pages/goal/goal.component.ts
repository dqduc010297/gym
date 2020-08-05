import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.scss']
})
export class GoalComponent implements OnInit {
  chartOptions: any;
  updateChartOptions: any;
  dataSet = [
    {
      exercise: 'Plank',
      set: 4,
      rep: 12,
      restTime: 10,
      remarks: '',
    },
    {
      exercise: 'Moutain Climber',
      set: 4,
      rep: 20,
      restTime: 10,
      remarks: '',
    },
    {
      exercise: 'Flyingjacks',
      set: 4,
      rep: 20,
      restTime: 10,
      remarks: '',
    },
    {
      exercise: 'Jumping Jacks',
      set: 4,
      rep: 20,
      restTime: 10,
      remarks: '',
    },
    {
      exercise: 'Burpees',
      set: 4,
      rep: 20,
      restTime: 10,
      remarks: '',
    },
  ];

  constructor() { }

  ngOnInit(): void {
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
