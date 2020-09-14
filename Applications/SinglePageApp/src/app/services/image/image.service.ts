import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Role } from 'src/app/const/role';
import { UserSearchResponse } from 'src/app/models/user/user-search.response';
import { UserSearchRequest } from 'src/app/requests/user/user-search.request';

@Injectable({ providedIn: 'root' })
export class UserService {

  constructor(
    private http: HttpClient
  ) {
  }

  getMemberSearch(userSearch: UserSearchRequest): Observable<UserSearchResponse[]> {
    userSearch.roleName = Role[Role.MEMBER];
    const params = new HttpParams().set('searchRq', JSON.stringify(userSearch));
    return this.http.get<UserSearchResponse[]>(`${environment.apiUrl}/user/search`, { params });
  }
}
