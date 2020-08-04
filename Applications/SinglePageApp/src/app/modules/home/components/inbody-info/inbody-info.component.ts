import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbody-info',
  templateUrl: './inbody-info.component.html',
  styleUrls: ['./inbody-info.component.scss']
})
export class InbodyInfoComponent implements OnInit {
  chartOptions: any;
  height = 170;
  max: number;

  constructor() { }

  ngOnInit(): void {
    this.weight();
  }

  weight() {
    this.max = Math.round((40 * (this.height / 100) * (this.height / 100) + 20) / 10) * 10;
    this.chartOptions = {
      grid: {
        left: '4%',
        right: '4%',
        bottom: '3%',
        top: '0%',
      },
      series: [{
        name: 'Machine Time',
        type: 'gauge',
        splitNumber: this.max / 10,
        max: this.max,
        axisLine: {
          lineStyle: {
            color: [
              [(18.5 * 1.7 * 1.7) / this.max, '#87b1d7'],
              [(25 * 1.7 * 1.7) / this.max, '#3dd365'],
              [(30 * 1.7 * 1.7) / this.max, '#eee133'],
              [(35 * 1.7 * 1.7) / this.max, '#fd802e'],
              [1, '#f95353']
            ],
            width: 24
          }
        },
        detail: {
          formatter: '{value} kg',
          textStyle: {
            color: 'auto',
          },
          offsetCenter: [0, '80%']
        },
        data: [{
          value: 90.1,
          name: 'Weight'
        }]
      }]
    };
  }
}
