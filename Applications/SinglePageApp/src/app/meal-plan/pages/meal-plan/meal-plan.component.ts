import { Component, OnInit } from '@angular/core';
import { MealPeriodMock } from 'src/app/core/mocks/meal-period.mock';
import { MealPlanPeriod } from '../../core/models/meal-plan-period.model';

@Component({
  selector: 'app-meal-plan',
  templateUrl: './meal-plan.component.html',
  styleUrls: ['./meal-plan.component.scss']
})
export class MealPlanComponent implements OnInit {
  mealPlanPeriods: MealPlanPeriod[] = [];
  selectedIndex = 0;

  constructor(
    private mealPeriodMock: MealPeriodMock
  ) {
  }

  ngOnInit(): void {
    this.mealPeriodMock.doMock().subscribe(
      result => {
        this.mealPlanPeriods = result;
      }
    );
  }

  newTab(): void {
    const period = new MealPlanPeriod();
    period.index = Math.max(...this.mealPlanPeriods.map(p => p.index)) + 1;
    period.title = `Giai đoạn ${period.index}`;
    this.mealPlanPeriods.push(period);
    this.selectedIndex = this.mealPlanPeriods.length;
  }

  closeTab({ index }: { index: number }): void {
    this.mealPlanPeriods.splice(index, 1);
  }
}
