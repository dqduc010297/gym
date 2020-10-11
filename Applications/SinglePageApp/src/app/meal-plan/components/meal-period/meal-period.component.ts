import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { StringUtil } from 'src/app/core/services/string-util.service';
import { MealPlanPeriod } from '../../core/models/meal-plan-period.model';

@Component({
  selector: 'app-meal-period',
  templateUrl: './meal-period.component.html',
  styleUrls: ['./meal-period.component.scss']
})
export class MealPeriodComponent implements OnInit, OnChanges {
  @Input() mealPlanPeriod: MealPlanPeriod = new MealPlanPeriod();
  @Output() changeToEditState: EventEmitter<number> = new EventEmitter<number>();

  chartOptions: any;
  updateChartOptions: any;
  colorPalette = ['#2ac2e7', '#3aae4e', '#ff9000'];

  notes: string[];

  constructor(
    private stringUtil: StringUtil
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.mealPlanPeriod?.currentValue) {
      this.drawChart();
      this.notes = this.stringUtil.convertStringToList(this.mealPlanPeriod.note);
    }
  }

  ngOnInit(): void {
  }

  editMealPlanPeriod() {
    this.changeToEditState.emit(this.mealPlanPeriod.id);
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
            { value: this.mealPlanPeriod.proteinPercent, name: 'Proteins' },
            { value: this.mealPlanPeriod.carbPercent, name: 'Carbs' },
            { value: this.mealPlanPeriod.fatPercent, name: 'Fats' },
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
