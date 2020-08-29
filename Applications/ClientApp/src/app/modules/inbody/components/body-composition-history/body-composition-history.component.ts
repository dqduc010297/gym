import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { BodyCompositionHistory } from 'src/app/models/inbody/body-composition-history';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-body-composition-history',
  templateUrl: './body-composition-history.component.html',
  styleUrls: ['./body-composition-history.component.scss']
})
export class BodyCompositionHistoryComponent implements OnInit, OnChanges {
  @Input() bodyCompositionHistories: BodyCompositionHistory[] = [];
  chartOptions: any;
  weightUpdateChartOptions: any;
  smmUpdateChartOptions: any;
  pbfUpdateChartOptions: any;

  testedDates: string[] = [];

  constructor(
    private datePipe: DatePipe
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.bodyCompositionHistories.currentValue) {
      this.testedDates = this.bodyCompositionHistories.map(p => this.datePipe.transform(p.testedDate, 'dd-MM-yyyy'));
      this.updatePBFChart();
      this.updateSMMChart();
      this.updateWeightChart();
    }
  }

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
        top: '10%',
        height: '60'
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        show: false,
        data: []
      },
      yAxis: {
        type: 'value',
        show: false,
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
          data: []
        },
      ]
    };
  }

  updateWeightChart() {
    this.weightUpdateChartOptions = {
      xAxis: {
        type: 'category',
        boundaryGap: false,
        show: false,
        data: this.testedDates
      },
      yAxis: {
        type: 'value',
        show: false,
        min: Math.min(...this.bodyCompositionHistories.map(p => p.weight)) - 5,
        max: Math.max(...this.bodyCompositionHistories.map(p => p.weight)) + 5,
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
          data: this.bodyCompositionHistories.map(p => p.weight)
        }
      ],
    };
  }

  updateSMMChart() {
    this.smmUpdateChartOptions = {
      xAxis: {
        type: 'category',
        boundaryGap: false,
        show: false,
        data: this.testedDates
      },
      yAxis: {
        type: 'value',
        show: false,
        min: Math.min(...this.bodyCompositionHistories.map(p => p.skeletalMuscleMass)) - 2,
        max: Math.max(...this.bodyCompositionHistories.map(p => p.skeletalMuscleMass)) + 2,
      },
      series: [
        {
          name: 'SMM',
          type: 'line',
          symbolSize: 6,
          label: {
            show: true,
            position: 'top'
          },
          data: this.bodyCompositionHistories.map(p => p.skeletalMuscleMass)
        }
      ],
    };
  }

  updatePBFChart() {
    this.pbfUpdateChartOptions = {
      xAxis: {
        type: 'category',
        boundaryGap: false,
        show: false,
        data: this.testedDates
      },
      yAxis: {
        type: 'value',
        show: false,
        min: Math.min(...this.bodyCompositionHistories.map(p => p.percentBodyFat)) - 2,
        max: Math.max(...this.bodyCompositionHistories.map(p => p.percentBodyFat)) + 2,
      },
      series: [
        {
          name: 'PBF',
          type: 'line',
          symbolSize: 6,
          label: {
            show: true,
            position: 'top'
          },
          data: this.bodyCompositionHistories.map(p => p.percentBodyFat)
        }
      ],
    };
  }
}
