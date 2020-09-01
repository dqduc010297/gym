import { IMock } from './imock';
import { Observable, of } from 'rxjs';
import { GoalOverview } from '../modules/goal/models/goal';
import { Injectable } from '@angular/core';
import { User } from '../models/auth/user';

@Injectable({ providedIn: 'root' })
export class LoginMock implements IMock {
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
        return of({
            age: 30,
            avatarURL: '',
            gender: 0,
            height: 1.72,
            token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJNRU1CRVIiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiMDM1NTU4ODU3NCIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWVpZGVudGlmaWVyIjoiMSIsImV4cCI6MTU5OTAwODEwMCwiaWF0IjoxNTk4OTIxNzAwfQ.WnoqnIEZ8O3eNBy2Y8aG-Jieu8naOQ4Vdt2ARYVkng0',
            userName: '0355588574',
        });
    }
}
