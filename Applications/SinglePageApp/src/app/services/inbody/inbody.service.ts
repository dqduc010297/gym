import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { InBodyDetail } from 'src/app/models/inbody/inbody-detail';
import { DatePipe } from '@angular/common';
import { BodyCompositionHistory } from 'src/app/models/inbody/body-composition-history';
import { MyInBodyRq } from 'src/app/models/inbody/my-inbody-rq';
import { FilterRequest } from 'src/app/requests/filter.request';
import { HomeRequest } from 'src/app/models/home/home.request';

@Injectable()
export class InBodyService {

  constructor(
    private http: HttpClient,
    private datePipe: DatePipe) {
  }

  getBodyCompositionHistories(homeRequest: HomeRequest): Observable<BodyCompositionHistory[]> {
    const params = new HttpParams().set('myInBodyRq', JSON.stringify(homeRequest))
      .set('loadingKey', homeRequest.getLoadingKey());
    return this.http.get<BodyCompositionHistory[]>(`${environment.apiUrl}/inbody/bodycompositionHistory`, { params });
  }

  getInBody(myInBodyRq: MyInBodyRq): Observable<InBodyDetail> {
    const params = new HttpParams().set('myInBodyRq', JSON.stringify(myInBodyRq));
    return this.http.get<InBodyDetail>(`${environment.apiUrl}/inbody`, { params });
  }

  getTestedDates(): Observable<Date[]> {
    return this.http.get<Date[]>(`${environment.apiUrl}/inbody/testeddates`);
  }

  createInBody(inBodyDetail: InBodyDetail): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/inbody`, inBodyDetail);
  }
}
