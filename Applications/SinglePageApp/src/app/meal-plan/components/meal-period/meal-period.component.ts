import { Component, Input, OnInit } from '@angular/core';
import { MealPeriod } from '../../core/models/meal-plan.model';

@Component({
  selector: 'app-meal-period',
  templateUrl: './meal-period.component.html',
  styleUrls: ['./meal-period.component.scss']
})
export class MealPeriodComponent implements OnInit {
  @Input() mealPeriod: MealPeriod = new MealPeriod();

  constructor() { }

  ngOnInit(): void {
  }
}
