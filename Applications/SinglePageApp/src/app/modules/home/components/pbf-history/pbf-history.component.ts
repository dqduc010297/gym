import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ColorLevel } from 'src/app/const/bmi';

@Component({
  selector: 'app-pbf-history',
  templateUrl: './pbf-history.component.html',
  styleUrls: ['./pbf-history.component.scss']
})
export class PbfHistoryComponent implements OnInit, OnChanges {
  @Input() testedDates: string[] = [];
  @Input() pbf: number[] = [];

  pbfChartOptions: any;
  pbfUpdateChartOptions: any;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.testedDates.currentValue) {
      this.updatePBFChart();
    }
  }

  ngOnInit(): void {
    this.initChart();
  }

  initChart() {
    this.pbfChartOptions = {
      title: {
        text: 'Percent Body Fat (%)'
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
          stack: 'PBF',
          areaStyle: {
            color: ColorLevel.Under
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
          stack: 'PBF',
          areaStyle: {
            color: ColorLevel.Normal
          },
          lineStyle: {
            width: 0,
          },
          symbolSize: 0,
          data: [10, 10, 10, 10, 10, 10, 10]
        },
        {
          name: 'Over',
          type: 'line',
          stack: 'PBF',
          areaStyle: {
            color: ColorLevel.ExtremelyOver
          },
          lineStyle: {
            width: 0,
          },
          symbolSize: 0,
          data: [40, 40, 40, 40, 40, 40, 40]
        },
      ]
    };
  }

  updatePBFChart() {
    console.log(this.pbf)
    this.pbfUpdateChartOptions = {
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: this.testedDates
        }
      ],
      series: [{
        name: 'Under',
        type: 'line',
        stack: 'PBF',
        areaStyle: {
          color: ColorLevel.Under
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
        stack: 'PBF',
        areaStyle: {
          color: ColorLevel.Normal
        },
        lineStyle: {
          width: 0,
        },
        symbolSize: 0,
        data: [10, 10, 10, 10, 10, 10, 10]
      },
      {
        name: 'Over',
        type: 'line',
        stack: 'PBF',
        areaStyle: {
          color: ColorLevel.ExtremelyOver
        },
        lineStyle: {
          width: 0,
        },
        symbolSize: 0,
        data: [40, 40, 40, 40, 40, 40, 40]
      },
      {
        name: 'PBF',
        type: 'line',
        data: this.pbf,
        label: {
          show: true,
          backgroundColor: 'white',
          borderRadius: 50,
          padding: 6,
          formatter: '{c}%'
        },
        lineStyle:{
          color: '#a22e2a'
        }
      },
      ]
    };
  }
}
