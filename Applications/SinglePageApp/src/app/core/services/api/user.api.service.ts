import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../../models/user';
import { UserMentionResponse } from '../../models/user-mention.response';
import { UserSearch } from '../../models/user-search.model';
import { UserMentionRequest } from '../../requests/user/user-mention.request';
import { UserSearchRequest } from '../../requests/user/user-search.request';
import { UserRequest } from '../../requests/user/user.request';


@Injectable({ providedIn: 'root' })
export class UserAPIService {

  constructor(
    private http: HttpClient
  ) {
  }

  getMemberSearch(userSearchRequest: UserSearchRequest): Observable<UserSearch[]> {
    const params = userSearchRequest.createParam();
    return this.http.get<UserSearch[]>(`${environment.apiUrl}/user/search`, { params });
  }

  getMentionUser(userMentionRequest: UserMentionRequest): Observable<UserMentionResponse[]> {
    const params = userMentionRequest.createParam();
    return this.http.get<UserMentionResponse[]>(`${environment.apiUrl}/user/mention?fullname=${userMentionRequest.fullname}`, { params });
  }

  getUserInfo(userRequest: UserRequest): Observable<User> {
    const params = userRequest.createParam();
    return this.http.get<User>(`${environment.apiUrl}/user?userId=${userRequest.body.id}`, { params });
  }

  updateUserInfo(userRequest: UserRequest): Observable<User> {
    const params = userRequest.createParam();
    return this.http.put<User>(`${environment.apiUrl}/user?userId=${userRequest.body.id}`, userRequest, { params });
  }

  createUser(userRequest: UserRequest): Observable<string> {
    const params = userRequest.createParam();
    return this.http.post<string>(`${environment.apiUrl}/user`, userRequest.body, { params });
  }
}
