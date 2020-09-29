import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginUser } from '../../models/login.user';
import { ChangePasswordRequest } from '../../requests/auth/change-password.request';
import { LoginRequest } from '../../requests/auth/login.request';

@Injectable({ providedIn: 'root' })
export class AuthAPIService {

    constructor(
        private http: HttpClient
    ) {
    }

    login(loginRequest: LoginRequest): Observable<LoginUser> {
        const params = loginRequest.createParam();
        return this.http.post<LoginUser>(`${environment.apiUrl}/auth/login`, loginRequest.body, { params });
    }

    changePassword(changePasswordRequest: ChangePasswordRequest): Observable<boolean>{
        const params = changePasswordRequest.createParam();
        return this.http.put<boolean>(`${environment.apiUrl}/auth/change-password`, changePasswordRequest.body, { params });
    }
}
