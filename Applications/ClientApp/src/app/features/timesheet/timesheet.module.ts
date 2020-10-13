import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimesheetRoutingModule } from './timesheet-routing.module';
import { SharedModule } from 'src/app/shared/share.module';
import { TimesheetComponent } from './pages/timesheet/timesheet.component';

@NgModule({
  declarations: [TimesheetComponent],
  imports: [
    CommonModule,
    TimesheetRoutingModule,
    SharedModule.forRoot(),
  ],
})
export class TimesheetModule { }
