import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BodyCompositionHistory } from 'src/app/inbody/core/models/body-composition-history';
import { InBody } from 'src/app/inbody/core/models/inbody.model';
import { environment } from 'src/environments/environment';
import { HomeRequest } from '../../../home/core/models/home.request';
import { InBodyRequest, } from '../models/inbody.request';


@Injectable()
export class InBodyAPIService {

  constructor(
    private http: HttpClient
  ) {
  }

  getBodyCompositionHistories(homeRequest: HomeRequest): Observable<BodyCompositionHistory[]> {
    const params = homeRequest.createParam();
    return this.http.get<BodyCompositionHistory[]>(`${environment.apiUrl}/inbody/bodycompositionHistory`, { params });
  }

  getInBody(inBodyRequest: InBodyRequest): Observable<InBody> {
    const params = inBodyRequest.createParam();
    return this.http.get<InBody>(`${environment.apiUrl}/inbody`, { params });
  }

  getTestedDates(): Observable<Date[]> {
    return this.http.get<Date[]>(`${environment.apiUrl}/inbody/testeddates`);
  }

  createInBody(InBody: InBody): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/inbody`, InBody);
  }
}
