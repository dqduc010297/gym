import { Component, Input, OnInit } from '@angular/core';
import { MealPeriod } from '../../core/models/meal-plan.model';

@Component({
  selector: 'app-new-meal-period',
  templateUrl: './new-meal-period.component.html',
  styleUrls: ['./new-meal-period.component.scss']
})
export class NewMealPeriodComponent implements OnInit {
  @Input() mealPeriod: MealPeriod = new MealPeriod();

  constructor() { }

  ngOnInit(): void {
  }

}
