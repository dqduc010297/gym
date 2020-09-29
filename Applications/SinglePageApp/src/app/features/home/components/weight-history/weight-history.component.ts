import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { BMILevel, ColorLevel } from 'src/app/const/bmi';

@Component({
  selector: 'app-weight-history',
  templateUrl: './weight-history.component.html',
  styleUrls: ['./weight-history.component.scss']
})
export class WeightHistoryComponent implements OnInit, OnChanges {
  @Input() weights: number[] = [];
  @Input() testedDates: string[] = [];

  height = this.authService.currentUserValue.height;

  weightChartOptions: any;
  weightUpdateChartOptions: any;

  constructor(
    private authService: AuthService,
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.weights.currentValue && changes.testedDates.currentValue) {
      this.updateChart();
    }
  }

  ngOnInit(): void {
    this.initChart();
  }

  initChart() {
    this.weightChartOptions = {
      title: {
        text: 'Weight (kg)'
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          padding: [16, 16, 16, 16]
        },
        splitLine: {
          show: false,
        }
      },
    };
  }

  updateChart() {
    this.weightUpdateChartOptions = {
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: this.testedDates
      },
      series: [{
        name: 'Under',
        type: 'line',
        stack: 'WeightStandard',
        areaStyle: {
          color: ColorLevel.Under,
        },
        lineStyle: {
          width: 0,
        },
        symbolSize: 0,
        data: this.generateWeightStandard(0)
      },
      {
        name: 'Normal',
        type: 'line',
        stack: 'WeightStandard',
        areaStyle: {
          color: ColorLevel.Normal,
        },
        lineStyle: {
          width: 0,
        },
        symbolSize: 0,
        data: this.generateWeightStandard(1)
      },
      {
        name: 'Slightly Over',
        type: 'line',
        stack: 'WeightStandard',
        areaStyle: {
          color: ColorLevel.SlightlyOver,
        },
        lineStyle: {
          width: 0,
        },
        symbolSize: 0,
        data: this.generateWeightStandard(2)
      },
      {
        name: 'Over',
        type: 'line',
        stack: 'WeightStandard',
        areaStyle: {
          color: ColorLevel.Over,
        },
        lineStyle: {
          width: 0,
        },
        symbolSize: 0,
        data: this.generateWeightStandard(3)
      },
      {
        name: 'ExtremelyOver',
        type: 'line',
        stack: 'WeightStandard',
        areaStyle: {
          color: ColorLevel.ExtremelyOver,
        },
        lineStyle: {
          width: 0,
        },
        symbolSize: 0,
        data: this.generateWeightStandard(4)
      },
      {
        name: 'Weight',
        type: 'line',
        symbolSize: 10,
        label: {
          show: true,
          backgroundColor: 'white',
          borderRadius: 50,
          padding: 6,
          formatter: '{c} kg'
        },
        data: this.weights,
        lineStyle: {
          color: '#c33733',
        }
      }
      ],
    };
  }

  private generateWeightStandard(k: number): number[] {
    let weightStandard = Math.round((BMILevel[k] * this.height * this.height) / 10) * 10;
    if (k > 0) {
      weightStandard -= Math.round((BMILevel[k - 1] * this.height * this.height) / 10) * 10;
    }
    return Array.from(Array(this.weights.length), (_, i) => weightStandard);
  }
}
