import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Role } from 'src/app/const/role';
import { UserSearchResponse } from 'src/app/models/user/user-search.response';
import { FilterRequest } from 'src/app/requests/filter.request';
import { UserSearchRequest } from 'src/app/requests/user/user-search.request';
import { UserOverviewRequest } from 'src/app/requests/user/user-overview.request';

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

  getUserOverview(userOverviewRequest: UserOverviewRequest): Observable<UserSearchResponse[]> {
    const params = new HttpParams().set('request', JSON.stringify(userOverviewRequest));
    return this.http.get<UserSearchResponse[]>(`${environment.apiUrl}/user/overview`, { params });
  }

}
