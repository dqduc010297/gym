import { IMock } from './imock';
import { Observable, of } from 'rxjs';
import { GoalOverview } from '../modules/goal/models/goal';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class GoalOverviewMock implements IMock {
  doMock(param?: any): Observable<any> {
    const data: GoalOverview[] = [
      {
        id: 1,
        startDate: new Date('03/04/2020'),
        endDate: new Date('03/11/2020'),
        description: 'Giảm 1.5kg mỡ, Tăng 1kg cơ, Giảm 1.0 kg',
        isSuccessful: false,
        isFinished: true,
      },
      {
        id: 2,
        startDate: new Date('04/04/2020'),
        endDate: new Date('04/11/2020'),
        description: 'Giảm 1.5kg mỡ, Tăng 1kg cơ, Giảm 1.0 kg',
        isSuccessful: false,
        isFinished: true,
      },
      {
        id: 3,
        startDate: new Date('05/04/2020'),
        endDate: new Date('05/11/2020'),
        description: 'Giảm 1.5kg mỡ, Tăng 1kg cơ, Giảm 1.0 kg',
        isSuccessful: false,
        isFinished: true,
      },
      {
        id: 4,
        startDate: new Date('06/04/2020'),
        endDate: new Date('06/11/2020'),
        description: 'Giảm 1.5kg mỡ, Tăng 1kg cơ, Giảm 1.0 kg',
        isSuccessful: false,
        isFinished: true,
      },
      {
        id: 5,
        startDate: new Date('07/04/2020'),
        endDate: new Date('07/11/2020'),
        description: 'Giảm 1.5kg mỡ, Tăng 1kg cơ, Giảm 1.0 kg',
        isSuccessful: true,
        isFinished: true,
      },
      {
        id: 6,
        startDate: new Date('07/11/2020'),
        endDate: new Date('07/18/2020'),
        description: 'Giảm 1.5kg mỡ, Tăng 1kg cơ, Giảm 1.0 kg',
        isSuccessful: true,
        isFinished: true,
      },
      {
        id: 7,
        startDate: new Date('07/19/2020'),
        endDate: new Date('07/26/2020'),
        description: 'Giảm 1.5kg mỡ, Tăng 1kg cơ, Giảm 1.0 kg',
        isSuccessful: true,
        isFinished: true,
      },
      {
        id: 8,
        startDate: new Date('08/01/2020'),
        endDate: new Date('08/10/2020'),
        description: 'Giảm 1.5kg mỡ, Tăng 1kg cơ, Giảm 1.0 kg',
        isSuccessful: true,
        isFinished: false,
      },
    ];
    return of(data.sort((a, b) => (b.startDate as any) - (a.startDate as any)));
  }
}
