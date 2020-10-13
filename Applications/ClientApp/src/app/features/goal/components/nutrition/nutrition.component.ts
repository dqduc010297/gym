import { Component, OnInit, Input } from '@angular/core';
import { Nutrition } from '../../models/nutrition';

@Component({
  selector: 'app-nutrition',
  templateUrl: './nutrition.component.html',
  styleUrls: ['./nutrition.component.scss']
})
export class NutritionComponent implements OnInit {
  @Input() nutritions: Nutrition[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
