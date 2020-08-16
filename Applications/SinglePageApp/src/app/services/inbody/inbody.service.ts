import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { InBodyDetail } from 'src/app/models/inbody/inbody-detail';

export const InBodyUrl = {
  GET_INBODY: `${environment.apiUrl}/inbody`
};

@Injectable({ providedIn: 'root' })
export class InBodyService {

  constructor(private http: HttpClient) {
  }

  getInBody(): Observable<InBodyDetail> {
    return this.http.get<InBodyDetail>(InBodyUrl.GET_INBODY);
  }
}
