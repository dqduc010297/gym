import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/user-management/models/user';
import { UserRequest } from 'src/app/user-management/models/user.request';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class APIService {
  constructor(
    private http: HttpClient
  ) {
  }

  getUser(id: number): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/user/${id}`);
  }

  updateUser(updatedUser: any): Observable<User> {
    return this.http.put<User>(`${environment.apiUrl}/user?userId=${updatedUser.id}`, updatedUser);
  }

  createUser(createdUser: any): Observable<string> {
    return this.http.post<string>(`${environment.apiUrl}/user`, createdUser);
  }
}
