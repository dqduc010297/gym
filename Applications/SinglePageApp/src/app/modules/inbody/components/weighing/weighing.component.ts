import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-weighing',
  templateUrl: './weighing.component.html',
  styleUrls: ['./weighing.component.scss']
})
export class WeighingComponent implements OnInit, OnChanges {
  chartOptions: any;
  updateChartOptions: any;
  height = this.authService.currentUserValue.height / 100;
  @Input() weight: number;

  constructor(
    private authService: AuthService
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.weight.currentValue) {
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
              [(18.5 * this.height * this.height) / maxWeight, '#87b1d7'],
              [(25 * this.height * this.height) / maxWeight, '#3dd365'],
              [(30 * this.height * this.height) / maxWeight, '#eee133'],
              [(35 * this.height * this.height) / maxWeight, '#fd802e'],
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
    const maxWeight = Math.round((40 * this.height * this.height + 20) / 10) * 10;
    this.updateChartOptions = {
      series: [{
        name: 'Machine Time',
        type: 'gauge',
        splitNumber: maxWeight / 10,
        max: maxWeight,
        axisLine: {
          lineStyle: {
            color: [
              [(18.5 * this.height * this.height) / maxWeight, '#87b1d7'],
              [(25 * this.height * this.height) / maxWeight, '#3dd365'],
              [(30 * this.height * this.height) / maxWeight, '#eee133'],
              [(35 * this.height * this.height) / maxWeight, '#fd802e'],
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
