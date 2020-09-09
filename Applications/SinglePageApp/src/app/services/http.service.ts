import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ 'providedIn': 'root' })
export class HttpService {
    constructor(
        private _http: HttpClient
    ) { }

    generateParams(method: string, params?: any): HttpParams {
        debugger;
        let paramResult = new HttpParams();
        if (params.getLoadingKey()) {
            paramResult = paramResult.set('loadingKey', params.getLoadingKey());
        }
        if (method === 'GET') {
            paramResult = paramResult.set('request', JSON.stringify(params));
        } else {
            return new HttpParams();
        }
        return paramResult;
    }

    public get<T>(url: string, paramRequest: any): Observable<any> {
        const params = this.generateParams('GET', paramRequest);
        return this._http.get(`${environment.apiUrl}/${url}`, { params: params });
    }
    public post(url: string, body: any): Observable<any> {
        const params = this.generateParams('POST');
        return this._http.post(`${environment.apiUrl}/${url}`, body, { params });
    }
    public put(url: string, body: any): Observable<any> {
        const params = this.generateParams('PUT');
        return this._http.put(`${environment.apiUrl}/${url}`, body, { params });
    }
    public delete(url: string, body: any): Observable<any> {
        const params = this.generateParams('DELETE');
        return this._http.delete(`${environment.apiUrl}/${url}`, body);
    }
}