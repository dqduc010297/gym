import { UserSearchByPhoneRequest } from 'src/app/models/user/user-search-by-phone-request';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Role } from 'src/app/const/role';
import { UserSearchRs } from 'src/app/models/user/user-search-rs';

@Injectable()
export class UserService {

  constructor(
    private http: HttpClient) {
  }

  getMemberSearch(userSearch: UserSearchByPhoneRequest): Observable<UserSearchRs[]> {
    userSearch.roleName = Role[Role.MEMBER];
    const params = new HttpParams().set('searchRq', JSON.stringify(userSearch));
    return this.http.get<UserSearchRs[]>(`${environment.apiUrl}/user/search`, { params });
  }

}
