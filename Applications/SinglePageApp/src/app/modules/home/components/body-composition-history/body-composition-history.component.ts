import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body-composition-history',
  templateUrl: './body-composition-history.component.html',
  styleUrls: ['./body-composition-history.component.scss']
})
export class BodyCompositionHistoryComponent implements OnInit {
  chartOptions: any;
  updateChartOptions: any;
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
        left: '4%',
        right: '4%',
        bottom: '3%',
        top: '0%',
        height: '60'
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        show: false,
        data: [
          '22/02/2020',
          '26/02/2020',
          '04/03/2020',
          '11/03/2020',
          '11/05/2020',
          '06/06/2020',
          '11/07/2020',
          '15/07/2020',
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
          data: [92.7, 91.6, 91.7, 90.7, 93.3, 93.2, 90.1, 90.4, 90.1]
        },
      ]
    };
  }
}
