import { Component, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MealPlanPeriod } from '../../core/models/meal-plan-period.model';
import { MealPlanPeriodAPIService } from '../../core/services/meal-period.api.service';

@Component({
  selector: 'app-meal-plan-overview',
  templateUrl: './meal-plan-overview.component.html',
  styleUrls: ['./meal-plan-overview.component.scss']
})
export class MealPlanOverviewComponent implements OnInit, OnChanges {
  @Input() userId: number;
  @Input() isView = false;

  mealPlanPeriods: MealPlanPeriod[] = [];
  selectedIndex = 0;
  isHideAddIcon = false;

  constructor(
    private mealPlanPeriodAPIService: MealPlanPeriodAPIService
  ) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.userId?.currentValue) {
      this.mealPlanPeriodAPIService.getList(changes.userId.currentValue).subscribe(
        result => {
          if (result.length === 0 && !this.isView) {
            this.newTab();
          } else {
            this.mealPlanPeriods = result;
          }
        }
      );
    }
  }

  ngOnInit(): void {
  }

  newTab(): void {
    this.isHideAddIcon = true;
    const period = new MealPlanPeriod();
    period.id = 0;
    if (this.mealPlanPeriods.length === 0) {
      period.index = 1;
    } else {
      period.index = this.mealPlanPeriods[this.mealPlanPeriods.length - 1].index + 1;
    }
    period.title = `Giai đoạn ${period.index}`;
    period.userId = this.userId;
    this.mealPlanPeriods.push(period);
    this.selectedIndex = this.mealPlanPeriods.length;
  }

  closeTab({ index }: { index: number }): void {
    this.isHideAddIcon = false;
    this.mealPlanPeriods.splice(index, 1);
  }

  changeToEditState(event: number) {
    this.isHideAddIcon = true;
    this.mealPlanPeriods.find(p => p.id === event).isView = false;
  }

  submitSuccess(event: any) {
    this.isHideAddIcon = false;
    if (Number.isInteger(event)) {
      this.mealPlanPeriods.find(p => p.id === event).isView = true;
    } else {
      this.mealPlanPeriods.pop();
      event.isView = true;
      this.mealPlanPeriods.push(event);
    }
  }
}
