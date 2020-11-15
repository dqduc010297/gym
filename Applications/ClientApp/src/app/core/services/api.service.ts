import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InBody } from 'src/app/inbody/core/models/inbody.model';
import { InBodyRequest } from 'src/app/inbody/core/models/inbody.request';
import { User } from 'src/app/user-management/models/user';
import { UsersRequest } from 'src/app/user-management/models/users.request';
import { environment } from 'src/environments/environment';
import { PaginationResponse } from '../responses/pagination.response';

@Injectable({ providedIn: 'root' })
export class APIService {
  constructor(
    private http: HttpClient
  ) {
  }

  getUsers(usersRequest: UsersRequest): Observable<PaginationResponse<User>> {
    const params = usersRequest.createParam();
    return this.http.get<PaginationResponse<User>>(`${environment.apiUrl}/user`, { params });
  }

  getUser(id: number): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/user/${id}`);
  }

  updateUser(updatedUser: any): Observable<any> {
    return this.http.put<any>(`${environment.apiUrl}/user?userId=${updatedUser.id}`, updatedUser);
  }

  createUser(createdUser: any): Observable<string> {
    return this.http.post<string>(`${environment.apiUrl}/user`, createdUser);
  }

  getInBody(inBodyRequest: InBodyRequest): Observable<any> {
    const params = inBodyRequest.createParam();
    return this.http.get<any>(`${environment.apiUrl}/inbody`, { params });
  }

  createInBody(inBody: InBody): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/inbody`, inBody);
  }
}
