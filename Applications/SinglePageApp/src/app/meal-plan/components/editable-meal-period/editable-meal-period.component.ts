import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StringUtil } from 'src/app/core/services/string-util.service';
import { MealPlanPeriod } from '../../core/models/meal-plan-period.model';
import { MealPlanPeriodRequest } from '../../core/models/meal-plan-period.request';
import { MealPlanPeriodAPIService } from '../../core/services/meal-period.api.service';

@Component({
  selector: 'app-editable-meal-period',
  templateUrl: './editable-meal-period.component.html',
  styleUrls: ['./editable-meal-period.component.scss']
})
export class EditableMealPeriodComponent implements OnInit {
  @Input() mealPlanPeriod: MealPlanPeriod = new MealPlanPeriod();
  @Output() submitSuccess: EventEmitter<MealPlanPeriod> = new EventEmitter<MealPlanPeriod>();

  mealPlanPeriodRequest: MealPlanPeriodRequest = new MealPlanPeriodRequest();

  isSubmit = false;
  textNote: string;

  constructor(
    private mealPlanPeriodAPIService: MealPlanPeriodAPIService,
  ) { }

  ngOnInit(): void {
  }

  submit() {
    this.isSubmit = true;
    this.mealPlanPeriodRequest.body = this.mealPlanPeriod;
    this.mealPlanPeriodAPIService.create(this.mealPlanPeriodRequest).subscribe(
      result => {
        this.mealPlanPeriod.id = result;
        this.submitSuccess.emit(this.mealPlanPeriod);
      }
    );
  }
}
