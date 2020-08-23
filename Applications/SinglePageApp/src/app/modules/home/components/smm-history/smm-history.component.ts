import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-smm-history',
  templateUrl: './smm-history.component.html',
  styleUrls: ['./smm-history.component.scss']
})
export class SmmHistoryComponent implements OnInit, OnChanges {
  @Input() testedDates: string[] = [];

  smmChartOptions: any;
  smmUpdateChartOptions: any;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.testedDates.currentValue) {
      this.updateChart();
    }
  }

  ngOnInit(): void {
    this.initChart();
  }

  initChart() {
    this.smmChartOptions = {
      title: {
        text: 'Skeletal Muscle Mass'
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: []
        }
      ],
      yAxis: {
        type: 'value',
        axisLabel: {
          padding: [16, 16, 16, 16]
        },
        splitLine: {
          show: false,
        }
      },
      series: [
        {
          name: 'Under',
          type: 'line',
          stack: 'Weight',
          areaStyle: {
            color: '#87b1d7'
          },
          lineStyle: {
            width: 0,
          },
          symbolSize: 0,
          data: [27, 27, 27, 27, 27, 27, 27]
        },
        {
          name: 'Normal',
          type: 'line',
          stack: 'Weight',
          areaStyle: {
            color: '#3dd365'
          },
          lineStyle: {
            width: 0,
          },
          symbolSize: 0,
          data: [5, 5, 5, 5, 5, 5, 5]
        },
        {
          name: 'Slightly Over',
          type: 'line',
          stack: 'Weight',
          areaStyle: {
            color: '#eee133'
          },
          lineStyle: {
            width: 0,
          },
          symbolSize: 0,
          data: [15, 15, 15, 15, 15, 15, 15]
        },
        {
          name: '最高气温',
          type: 'line',
          data: [34, 34.5, 35, 35.9, 34.8, 34.6, 35],
          label: {
            show: true,
            backgroundColor: 'white',
            borderRadius: 50,
            padding: 6,
            formatter: '{c} kg'
          }
        },
      ]
    };
  }

  updateChart() {
    this.smmUpdateChartOptions = {
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: this.testedDates
      },
      // series: [
      //   {
      //     name: 'Weight',
      //     type: 'line',
      //     symbolSize: 6,
      //     label: {
      //       show: true,
      //       position: 'top'
      //     },
      //     data: this.weights
      //   }
      // ],
    };
  }
}
