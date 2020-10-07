import { Component, Input, OnInit } from '@angular/core';
import { StringUtil } from 'src/app/core/services/string-util.service';
import { MealPlanPeriod } from '../../core/models/meal-plan-period.model';
import { MealPlanPeriodRequest } from '../../core/models/meal-plan-period.request';
import { MealPlanPeriodService } from '../../core/services/meal-period.api.service';

@Component({
  selector: 'app-new-meal-period',
  templateUrl: './new-meal-period.component.html',
  styleUrls: ['./new-meal-period.component.scss']
})
export class NewMealPeriodComponent implements OnInit {
  @Input() mealPlanPeriod: MealPlanPeriod = new MealPlanPeriod();
  mealPlanPeriodRequest: MealPlanPeriodRequest = new MealPlanPeriodRequest();

  isSubmit = false;
  textNote: string;

  constructor(
    private stringUtil: StringUtil,
    private mealPlanPeriodService: MealPlanPeriodService
  ) { }

  ngOnInit(): void {
  }

  submit() {
    this.isSubmit = true;
    this.mealPlanPeriod.mealPlanSummarize.notes = this.stringUtil.convertStringToList(this.textNote);
    this.mealPlanPeriodRequest.body = this.mealPlanPeriod;
    this.mealPlanPeriodService.create(this.mealPlanPeriodRequest).subscribe(
      result => {
        console.log(result);
      }
    );
  }
}
