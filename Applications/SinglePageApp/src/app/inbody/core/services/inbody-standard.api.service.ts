import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InBodyStandard } from 'src/app/inbody/core/models/inBody-standard';
import { environment } from 'src/environments/environment';


@Injectable()
export class InBodyStandardAPIService {

  constructor(
    private http: HttpClient
  ) {
  }

  getLatestInBody(userId: number): Observable<InBodyStandard> {
    return this.http.get<InBodyStandard>(`${environment.apiUrl}/inbodystandard/latest?userId=${userId}`);
  }
}
