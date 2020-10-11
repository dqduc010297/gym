import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { StringUtil } from 'src/app/core/services/string-util.service';
import { Meal } from '../../core/models/meal.model';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss']
})
export class MealComponent implements OnInit, OnChanges {
  @Input() isView = true;
  @Input() meal: Meal;
  @Input() isSubmit = false;

  menus: string[];
  notes: string[];

  constructor(
    private stringUtil: StringUtil
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.meal?.currentValue) {
      this.menus = this.stringUtil.convertStringToList(this.meal.menu);
      this.notes = this.stringUtil.convertStringToList(this.meal.note);
    }
  }

  ngOnInit(): void {
  }

}
