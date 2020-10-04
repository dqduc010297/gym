import { Component, OnInit } from '@angular/core';
import { MealPeriodMock } from 'src/app/core/mocks/meal-period.mock';
import { MealPeriod } from '../../core/models/meal-plan.model';

@Component({
  selector: 'app-meal-plan',
  templateUrl: './meal-plan.component.html',
  styleUrls: ['./meal-plan.component.scss']
})
export class MealPlanComponent implements OnInit {
  mealPeriods: MealPeriod[] = [];
  selectedIndex = 0;

  constructor(
    private mealPeriodMock: MealPeriodMock
  ) {
  }

  ngOnInit(): void {
    this.mealPeriodMock.doMock().subscribe(
      result => {
        this.mealPeriods = result;
      }
    );
  }

  newTab(): void {
    const period = new MealPeriod();
    period.index = Math.max(...this.mealPeriods.map(p => p.index)) + 1;
    period.title = `Giai đoạn ${period.index}`;
    this.mealPeriods.push(period);
    this.selectedIndex = this.mealPeriods.length;
  }

  closeTab({ index }: { index: number }): void {
    this.mealPeriods.splice(index, 1);
  }
}
