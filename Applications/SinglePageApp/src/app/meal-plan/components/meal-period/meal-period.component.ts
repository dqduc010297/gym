import { Component, Input, OnInit } from '@angular/core';
import { MealPlanPeriod } from '../../core/models/meal-plan-period.model';

@Component({
  selector: 'app-meal-period',
  templateUrl: './meal-period.component.html',
  styleUrls: ['./meal-period.component.scss']
})
export class MealPeriodComponent implements OnInit {
  @Input() mealPlanPeriod: MealPlanPeriod = new MealPlanPeriod();

  constructor() { }

  ngOnInit(): void {
  }
}
