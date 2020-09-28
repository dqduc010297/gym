import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { InBodyDetail } from 'src/app/models/inbody/inbody-detail';
import { DatePipe } from '@angular/common';
import { BodyCompositionHistory } from 'src/app/models/inbody/body-composition-history';
import { InBodyStandard } from 'src/app/models/inbody/inBody-standard';

@Injectable()
export class InBodyStandardService {

  constructor(
    private http: HttpClient,
    private datePipe: DatePipe) {
  }

  getLatestInBody(userId: number): Observable<InBodyStandard> {
    return this.http.get<InBodyStandard>(`${environment.apiUrl}/inbodystandard/latest?userId=${userId}`);
  }
}
