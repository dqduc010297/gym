import { Component, OnInit } from '@angular/core';
import { NzCalendarMode } from 'ng-zorro-antd/calendar';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  selectedValue  = Date.now;
  mode: NzCalendarMode = 'month';

  constructor() {

  }

  ngOnInit(): void {
  }

  selectChange(select: Date): void {
    console.log(`Select value: ${select}`);
  }
}
