import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MealPlanSummarize } from '../../core/models/meal-plan-summarize.model';

@Component({
  selector: 'app-meal-plan-summarize',
  templateUrl: './meal-plan-summarize.component.html',
  styleUrls: ['./meal-plan-summarize.component.scss']
})

export class MealPlanSummarizeComponent implements OnChanges {
  @Input() mealPlanSummarize: MealPlanSummarize;
  @Input() isView: boolean ;

  chartOptions: any;
  updateChartOptions: any;
  colorPalette = ['#2ac2e7', '#3aae4e', '#ff9000'];
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.mealPlanSummarize.currentValue) {
      this.drawChart();
    }
  }

  drawChart() {
    this.chartOptions = {
      grid: {
        top: '1%'
      },
      series: [
        {
          name: 'Lower-carb for fat loss',
          type: 'pie',
          data: [
            { value: this.mealPlanSummarize.proteinPercent, name: 'Proteins' },
            { value: this.mealPlanSummarize.carbPercent, name: 'Carbs' },
            { value: this.mealPlanSummarize.fatPercent, name: 'Fats' },
          ],
          label: {
            position: 'inner',
            formatter: '{b} \n\n {d}%',
            fontSize: 13,
          },
          color: this.colorPalette,
        }
      ]
    };
  }

}
