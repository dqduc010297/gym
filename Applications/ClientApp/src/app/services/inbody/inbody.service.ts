import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { InBodyDetail } from 'src/app/models/inbody/inbody-detail';
import { DatePipe } from '@angular/common';
import { BodyCompositionHistory } from 'src/app/models/inbody/body-composition-history';

@Injectable({ providedIn: 'root' })
export class InBodyService {

  constructor(
    private http: HttpClient,
    private datePipe: DatePipe) {
  }

  getBodyCompositionHistories(): Observable<BodyCompositionHistory[]> {
    return this.http.get<BodyCompositionHistory[]>(`${environment.apiUrl}/inbody/bodycompositionHistory`);
  }

  getInBody(testedDate: Date): Observable<InBodyDetail> {
    const params = new HttpParams().set('testedDate', this.datePipe.transform(testedDate, 'yyyy-MM-dd'));
    return this.http.get<InBodyDetail>(`${environment.apiUrl}/inbody`, { params });
  }

  getLatestInBody(): Observable<InBodyDetail> {
    return this.http.get<InBodyDetail>(`${environment.apiUrl}/inbody`);
  }

  getTestedDates(): Observable<Date[]> {
    return this.http.get<Date[]>(`${environment.apiUrl}/inbody/testeddates`);
  }

  createInBody(inBodyDetail: InBodyDetail): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/inbody`, inBodyDetail);
  }
}
