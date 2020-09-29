import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HomeRequest } from '../../requests/home/home.request';
import { BodyCompositionHistory } from '../../models/inbody/body-composition-history';
import { InBodyDetail } from '../../models/inbody/inbody-detail';
import { InBodyRequest, } from '../../requests/inbody/my-inbody.request';


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

  getInBody(inBodyRequest: InBodyRequest): Observable<InBodyDetail> {
    const params = inBodyRequest.createParam();
    return this.http.get<InBodyDetail>(`${environment.apiUrl}/inbody`, { params });
  }

  getTestedDates(): Observable<Date[]> {
    return this.http.get<Date[]>(`${environment.apiUrl}/inbody/testeddates`);
  }

  createInBody(inBodyDetail: InBodyDetail): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/inbody`, inBodyDetail);
  }
}
