import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pbf-history',
  templateUrl: './pbf-history.component.html',
  styleUrls: ['./pbf-history.component.scss']
})
export class PbfHistoryComponent implements OnInit {
  pbfChartOptions: any;
  pbfUpdateChartOptions: any;

  constructor() { }

  ngOnInit(): void {
    this.initChart();
  }

  initChart() {
    this.pbfChartOptions = {
      title: {
        text: 'Percent Body Fat'
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
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
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
          data: [10, 10, 10, 10, 10, 10, 10]
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
          data: [20, 20, 20, 20, 20, 20, 20]
        },
        {
          name: 'Slightly Over',
          type: 'line',
          stack: 'Weight',
          areaStyle: {
            color: '#f95353'
          },
          lineStyle: {
            width: 0,
          },
          symbolSize: 0,
          data: [40, 40, 40, 40, 40, 40, 40]
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
            formatter: '{c}%'
          }
        },
      ]
    };
  }

}
