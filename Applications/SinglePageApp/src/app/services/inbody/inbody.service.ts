import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { InBodyDetail } from 'src/app/models/inbody/inbody-detail';
import { DatePipe } from '@angular/common';
import { TestedDates } from 'src/app/models/inbody/tested-date';

@Injectable({ providedIn: 'root' })
export class InBodyService {

  constructor(
    private http: HttpClient,
    private datePipe: DatePipe) {
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
}
