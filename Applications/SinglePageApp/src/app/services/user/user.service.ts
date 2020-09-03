import { UserSearch } from 'src/app/models/user/user-search';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Role } from 'src/app/const/role';

@Injectable()
export class UserService {

  constructor(
    private http: HttpClient) {
  }

  getMemberSearch(): Observable<UserSearch[]> {
    return this.http.get<UserSearch[]>(`${environment.apiUrl}/user/search?roleName=${Role[Role.MEMBER]}`);
  }

}
