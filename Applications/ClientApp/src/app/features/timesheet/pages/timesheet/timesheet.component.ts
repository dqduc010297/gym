import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.scss']
})

export class TimesheetComponent implements OnInit {  
  date = new Date(2012, 11, 21);
  mode = 'month';

  constructor() { }

  ngOnInit(): void {
  }

  panelChange(change: { date: Date; mode: string }): void {
    console.log(change.date, change.mode);
  }
}

