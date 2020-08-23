import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-inbody-info',
  templateUrl: './inbody-info.component.html',
  styleUrls: ['./inbody-info.component.scss']
})
export class InbodyInfoComponent implements OnInit, OnChanges {
  chartOptions: any;
  updateChartOptions: any;

  @Input() height: number;
  @Input() weight: number;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.height.currentValue && changes.weight.currentValue) {
      this.updateWeightChart();
    }
  }

  ngOnInit(): void {
    this.initWeightChart();
  }

  initWeightChart() {
    const maxWeight = 100;
    this.chartOptions = {
      grid: {
        left: '4%',
        right: '4%',
        bottom: '3%',
        top: '0%',
      },
      series: [{
        type: 'gauge',
        splitNumber: maxWeight / 10,
        max: maxWeight,
        axisLine: {
          lineStyle: {
            color: [
              [(18.5 * 1.7 * 1.7) / maxWeight, '#87b1d7'],
              [(25 * 1.7 * 1.7) / maxWeight, '#3dd365'],
              [(30 * 1.7 * 1.7) / maxWeight, '#eee133'],
              [(35 * 1.7 * 1.7) / maxWeight, '#fd802e'],
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
          value: 0,
          name: 'Weight'
        }]
      }]
    };
  }

  updateWeightChart() {
    const maxWeight = Math.round((40 * (this.height / 100) * (this.height / 100) + 20) / 10) * 10;
    this.updateChartOptions = {
      series: [{
        name: 'Machine Time',
        type: 'gauge',
        splitNumber: maxWeight / 10,
        max: maxWeight,
        axisLine: {
          lineStyle: {
            color: [
              [(18.5 * 1.7 * 1.7) / maxWeight, '#87b1d7'],
              [(25 * 1.7 * 1.7) / maxWeight, '#3dd365'],
              [(30 * 1.7 * 1.7) / maxWeight, '#eee133'],
              [(35 * 1.7 * 1.7) / maxWeight, '#fd802e'],
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
          value: this.weight,
          name: 'Weight'
        }]
      }]
    };
  }
}
