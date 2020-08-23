import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { BMILevel } from 'src/app/const/bmi';

@Component({
  selector: 'app-weight-history',
  templateUrl: './weight-history.component.html',
  styleUrls: ['./weight-history.component.scss']
})
export class WeightHistoryComponent implements OnInit, OnChanges {
  @Input() weights: number[] = [];
  @Input() testedDates: string[] = [];

  height: number;

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
    this.height = this.authService.currentUserValue.height;
    this.initChart();
  }

  initChart() {
    this.weightChartOptions = {
      title: {
        text: 'Weight'
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
        data: []
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
      series: [
        {
          name: 'Under',
          type: 'line',
          stack: 'Weight',
          areaStyle: {
            color: '#87b1d7',
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
          stack: 'Weight',
          areaStyle: {
            color: '#3dd365',
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
          stack: 'Weight',
          areaStyle: {
            color: '#eee133',
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
          stack: 'Weight',
          areaStyle: {
            color: '#fd802e',
          },
          lineStyle: {
            width: 0,
          },
          symbolSize: 0,
          data: this.generateWeightStandard(3)
        },
        {
          name: 'OverOver',
          type: 'line',
          stack: 'Weight',
          areaStyle: {
            color: '#f95353',
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
          data: [],
          label: {
            show: true,
            backgroundColor: 'white',
            borderRadius: 50,
            padding: 6,
            formatter: '{c} kg'
          },
          lineStyle: {
            color: '#000',
            width: 1,
          }
        },
      ]
    };
  }

  updateChart() {
    this.weightUpdateChartOptions = {
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: this.testedDates
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
          data: this.weights
        }
      ],
    };
  }

  private generateWeightStandard(k: number): number[] {
    let weightStandard = Math.round((BMILevel[k] * (this.height / 100) * (this.height / 100)) / 10) * 10;
    if (k > 0) {
      weightStandard -= Math.round((BMILevel[k - 1] * (this.height / 100) * (this.height / 100)) / 10) * 10;
    }
    return Array.from(Array(6), (_, i) => weightStandard);
  }
}
