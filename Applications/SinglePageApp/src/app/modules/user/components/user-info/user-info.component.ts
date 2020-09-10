import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit, OnChanges {
  @Input() userId: number;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.userId.currentValue) {
      console.log(changes.userId.currentValue);
    }
  }

  ngOnInit(): void {
  }

}
