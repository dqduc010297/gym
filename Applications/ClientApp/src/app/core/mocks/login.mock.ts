import { IMock } from './imock';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoginMock implements IMock {
    doMock(param?: any): Observable<any> {
        return of({
            age: 30,
            avatarURL: '',
            gender: 0,
            isNeedToChangePassword: false,
            role: 0,
            token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJNRU1CRVIiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiMDM1NTU4ODU3NCIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWVpZGVudGlmaWVyIjoiMSIsImV4cCI6MTYxMDExOTI2NSwiaWF0IjoxNjAxNDc5MjY1fQ.mUAQoelNO4AjI2d1P9R6qOblPuQ-a_gsZSDMg2dqj74',
            userName: '0355588574',
        });
    }
}
