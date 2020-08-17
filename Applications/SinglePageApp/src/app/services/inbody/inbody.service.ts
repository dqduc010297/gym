import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { InBodyDetail } from 'src/app/models/inbody/inbody-detail';

@Injectable({ providedIn: 'root' })
export class InBodyService {

  constructor(private http: HttpClient) {
  }

  getInBody(testedDate: Date): Observable<InBodyDetail> {
    const params = new HttpParams().set('testedDate', testedDate.toLocaleString());
    return this.http.get<InBodyDetail>(`${environment.apiUrl}/inbody`, { params });
  }

  getLatestInBody(): Observable<InBodyDetail> {
    return this.http.get<InBodyDetail>(`${environment.apiUrl}/inbody`);
  }
}
