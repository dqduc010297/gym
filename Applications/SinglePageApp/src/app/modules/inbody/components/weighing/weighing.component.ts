import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ColorLevel } from 'src/app/const/bmi';

@Component({
  selector: 'app-weighing',
  templateUrl: './weighing.component.html',
  styleUrls: ['./weighing.component.scss']
})
export class WeighingComponent implements OnInit, OnChanges {
  chartOptions: any;
  updateChartOptions: any;
  height = this.authService.currentUserValue.height;
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
              [(18.5 * this.height * this.height) / maxWeight, ColorLevel.Under],
              [(25 * this.height * this.height) / maxWeight, ColorLevel.Normal],
              [(30 * this.height * this.height) / maxWeight, ColorLevel.SlightlyOver],
              [(35 * this.height * this.height) / maxWeight, ColorLevel.Over],
              [1, ColorLevel.ExtremelyOver]
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
              [(18.5 * this.height * this.height) / maxWeight, ColorLevel.Under],
              [(25 * this.height * this.height) / maxWeight, ColorLevel.Normal],
              [(30 * this.height * this.height) / maxWeight, ColorLevel.SlightlyOver],
              [(35 * this.height * this.height) / maxWeight, ColorLevel.Over],
              [1, ColorLevel.ExtremelyOver]
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
