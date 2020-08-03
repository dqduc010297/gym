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
    this.chartOptions = {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
      },
      series: [
        // {
        //     name: '访问来源',
        //     type: 'pie',
        //     selectedMode: 'single',
        //     radius: [0, '30%'],

        //     label: {
        //         position: 'inner'
        //     },
        //     labelLine: {
        //         show: false
        //     },
        //     data: [
        //         {value: 335, name: '直达', selected: true},
        //         {value: 679, name: '营销广告'},
        //         {value: 1548, name: '搜索引擎'}
        //     ]
        // },
        {
          name: '访问来源',
          type: 'pie',
          radius: ['40%', '55%'],
          label: {
            formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
            backgroundColor: '#eee',
            borderColor: '#aaa',
            borderWidth: 1,
            borderRadius: 4,
            rich: {
              a: {
                color: '#999',
                lineHeight: 22,
                align: 'center'
              },
              hr: {
                borderColor: '#aaa',
                width: '100%',
                borderWidth: 0.5,
                height: 0
              },
              b: {
                fontSize: 16,
                lineHeight: 33
              },
              per: {
                color: '#eee',
                backgroundColor: '#334455',
                padding: [2, 4],
                borderRadius: 2
              }
            }
          },
          data: [
            { value: 335, name: '直达' },
            { value: 310, name: '邮件营销' },
            { value: 234, name: '联盟广告' },
            { value: 135, name: '视频广告' },
            { value: 1048, name: '百度' },
            { value: 251, name: '谷歌' },
            { value: 147, name: '必应' },
            { value: 102, name: '其他' }
          ]
        }
      ]
    };
  }

  weight() {
    this.max = Math.round((40 * (this.height / 100) * (this.height / 100) + 20) / 10) * 10;
    this.chartOptions = {
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
          offsetCenter: [0, "80%"]
        },
        data: [{
          value: 90.1,
          name: 'Weight'
        }]
      }]
    };
  }
}
