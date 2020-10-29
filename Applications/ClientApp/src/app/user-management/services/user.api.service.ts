import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../user/core/models/user';
import { UserRequest } from '../user/core/models/user.request';
import { UsersRequest } from '../users/models/users.request';

@Injectable({ providedIn: 'root' })

export class UserAPIService {

  constructor(
    private http: HttpClient
  ) {
  }

  list(usersRequest: UsersRequest): Observable<any> {
    const params = usersRequest.createParam();
    return this.http.get<any>(`${environment.apiUrl}/user`, { params });
  }

  getUser(userRequest: UserRequest): Observable<User> {
    const params = userRequest.createParam();
    return this.http.get<User>(`${environment.apiUrl}/user/${userRequest.body.id}`, { params });
  }

  updateUser(userRequest: UserRequest): Observable<User> {
    const params = userRequest.createParam();
    return this.http.put<User>(`${environment.apiUrl}/user?userId=${userRequest.body.id}`, userRequest.body, { params });
  }

  createUser(userRequest: UserRequest): Observable<string> {
    const params = userRequest.createParam();
    return this.http.post<string>(`${environment.apiUrl}/user`, userRequest.body, { params });
  }
}
