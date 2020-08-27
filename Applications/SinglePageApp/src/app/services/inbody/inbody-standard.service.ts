import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { InBodyDetail } from 'src/app/models/inbody/inbody-detail';
import { DatePipe } from '@angular/common';
import { BodyCompositionHistory } from 'src/app/models/inbody/body-composition-history';

@Injectable({ providedIn: 'root' })
export class InBodyStandardService {

  constructor(
    private http: HttpClient,
    private datePipe: DatePipe) {
  }

  getLatestInBody(): Observable<InBodyDetail> {
    return this.http.get<InBodyDetail>(`${environment.apiUrl}/inbodystandard/latest`);
  }
}
