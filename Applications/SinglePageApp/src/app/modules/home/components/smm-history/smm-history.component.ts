import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Gender } from 'src/app/const/gender';
import { MenSMMLevel, WomenSMMLevel, ColorLevel } from 'src/app/const/bmi';

@Component({
  selector: 'app-smm-history',
  templateUrl: './smm-history.component.html',
  styleUrls: ['./smm-history.component.scss']
})
export class SmmHistoryComponent implements OnInit, OnChanges {
  @Input() smm: number[] = [];
  @Input() testedDates: string[] = [];

  smmChartOptions: any;
  smmUpdateChartOptions: any;

  smmStandardUnder: number[] = [];
  smmStandardNormal: number[] = [];
  smmStandardOver: number[] = [];

  constructor(
    private authService: AuthService
  ) { }

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
        text: 'Skeletal Muscle Mass (kg)'
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
    };
  }

  updateChart() {
    this.generateSMMStandard();
    this.smmUpdateChartOptions = {
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: this.testedDates
      },
      series: [
        {
          name: 'Under',
          type: 'line',
          stack: 'SMM',
          areaStyle: {
            color: ColorLevel.Under
          },
          lineStyle: {
            width: 0,
          },
          symbolSize: 0,
          data: this.smmStandardUnder
        },
        {
          name: 'Normal',
          type: 'line',
          stack: 'SMM',
          areaStyle: {
            color: ColorLevel.Normal
          },
          lineStyle: {
            width: 0,
          },
          symbolSize: 0,
          data: this.smmStandardNormal
        },
        {
          name: 'Over',
          type: 'line',
          stack: 'SMM',
          areaStyle: {
            color: ColorLevel.SlightlyOver
          },
          lineStyle: {
            width: 0,
          },
          symbolSize: 0,
          data: this.smmStandardOver
        },
        {
          name: 'SMM',
          type: 'line',
          data: this.smm,
          label: {
            show: true,
            backgroundColor: 'white',
            borderRadius: 50,
            padding: 6,
            formatter: '{c} kg'
          },
          lineStyle:{
            color: '#a22e2a'
          }
        },
      ]
    };
  }

  private calculateSMMStandardMax(height: number, k: number) {
    return k * 25 * (height / 100) * (height / 100);
  }

  private calculateSMMStandardMin(height: number, k: number) {
    return k * 18.5 * (height / 100) * (height / 100);
  }

  private generateSMMStandard() {
    const age = this.authService.currentUserValue.age;
    const gender = this.authService.currentUserValue.gender;
    const height = this.authService.currentUserValue.height;
    if (gender == Gender.MALE) {
      for (let i = 0; i < MenSMMLevel.length; i++) {
        if (age < MenSMMLevel[i].maxAge) {
          const standard = MenSMMLevel[i];
          this.smmStandardUnder = Array.from(Array(6), (_, i) => this.calculateSMMStandardMin(height, standard.min));
          this.smmStandardNormal = Array.from(
            Array(6), (_, i) => (this.calculateSMMStandardMax(height, standard.max) - this.calculateSMMStandardMin(height, standard.min)));
          this.smmStandardOver = Array.from(
            Array(6), (_, i) => (this.calculateSMMStandardMax(height, 1) - this.calculateSMMStandardMin(height, standard.max)));
          return;
        }
      }
    } else {
      for (let i = 0; i < WomenSMMLevel.length; i++) {
        if (age < WomenSMMLevel[i].maxAge) {
          const standard = WomenSMMLevel[i];
          this.smmStandardUnder = Array.from(Array(6), (_, i) => this.calculateSMMStandardMin(height, standard.min));
          this.smmStandardNormal = Array.from(
            Array(6), (_, i) => (this.calculateSMMStandardMax(height, standard.max) - this.calculateSMMStandardMin(height, standard.min)));
          this.smmStandardOver = Array.from(
            Array(6), (_, i) => (this.calculateSMMStandardMax(height, 1) - this.calculateSMMStandardMin(height, standard.max)));
          return;
        }
      }
    }
  }
}
