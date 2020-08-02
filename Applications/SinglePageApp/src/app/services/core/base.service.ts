import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface IBaseService {
  baseUrl: string;
  get(): Observable<any>;
  put(data: any): Observable<any>;
  post(data: any): Observable<any>;
  delete(data: any): Observable<any>;
}

export abstract class BaseService implements IBaseService {
  baseUrl: string;
  constructor(private http: HttpClient) {

  }
  get(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
  put(data: any): Observable<any> {
    return this.http.put(this.baseUrl, data);
  }
  post(data: any): Observable<any> {
    return this.http.post(this.baseUrl, data);
  }
  delete(data: any): Observable<any> {
    return this.http.delete(this.baseUrl, data);
  }
}
