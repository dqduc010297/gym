import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meal-period',
  templateUrl: './meal-period.component.html',
  styleUrls: ['./meal-period.component.scss']
})
export class MealPeriodComponent implements OnInit {
  index = 0;
  disable = false;

  radioValue = 'Apple';
  options = [
    { label: 'Bún , Phở , Cơm , Bánh các loại . vvvv ', value: 'Apple' },
    { label: '150g Tinh Bột ( Khoai , Cơm , Gạo lứt .... )', value: 'Apple' },
    { label: '100g Thịt các Loại ( ưu tiên thịt cá , gà , bò , heo ... )', value: 'Apple' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onIndexChange(index: number): void {
    this.index = index;
  }
}
