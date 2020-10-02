import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meal-plan-summarize',
  templateUrl: './meal-plan-summarize.component.html',
  styleUrls: ['./meal-plan-summarize.component.scss']
})
export class MealPlanSummarizeComponent implements OnInit {

  chartOptions: any;
  updateChartOptions: any;
  colorPalette = ['#2ac2e7', '#3aae4e', '#ff9000'];
  constructor() { }

  ngOnInit(): void {
    this.initChart();
  }


  initChart() {
    this.chartOptions = {
      title: {
        text: 'Tổng kCal: 1500 kCal',
        left: 'center'
      },
      series: [
        {
          name: 'Lower-carb for fat loss',
          type: 'pie',
          // center: ['50%', '60%'],
          data: [
            { value: 750, name: 'Proteins' },
            { value: 300, name: 'Carbs' },
            { value: 450, name: 'Fats' },
          ],
          label: {
            position: 'inner',
            formatter: '{b} \n\n {c} ({d}%)',
            fontSize: 13,
            fontWeight: 'bold',
          },
          color: this.colorPalette,
        }
      ]
    };
  }

  updateChart() {
    this.updateChartOptions = {
      title: {
        text: '某站点用户访问来源',
        subtext: '纯属虚构',
        left: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: '55%',
          center: ['50%', '60%'],
          data: [
            { value: 335, name: '直接访问' },
            { value: 310, name: '邮件营销' },
            { value: 234, name: '联盟广告' },
            { value: 135, name: '视频广告' },
            { value: 1548, name: '搜索引擎' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };
  }
}
