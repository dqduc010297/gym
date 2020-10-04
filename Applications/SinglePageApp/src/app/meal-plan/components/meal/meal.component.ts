import { Component, Input, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Meal } from '../../core/models/meal.model';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss']
})
export class MealComponent implements OnInit {
  @Input() isView = true;
  @Input() meal: Meal;

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
