import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ChangePasswordRequest } from './models/change-password.request';
import { LoginRequest } from './models/login.request';
import { LoginResponse } from './models/login.response';

@Injectable({ providedIn: 'root' })
export class AuthAPIService {

    constructor(
        private http: HttpClient
    ) {
    }

    login(loginRequest: LoginRequest): Observable<LoginResponse> {
        const params = loginRequest.createParam();
        return this.http.post<LoginResponse>(`${environment.apiUrl}/auth/login`, loginRequest.body, { params });
    }

    changePassword(changePasswordRequest: ChangePasswordRequest): Observable<boolean>{
        const params = changePasswordRequest.createParam();
        return this.http.put<boolean>(`${environment.apiUrl}/auth/change-password`, changePasswordRequest.body, { params });
    }
}
