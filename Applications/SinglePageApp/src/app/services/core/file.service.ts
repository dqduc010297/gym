import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class FileService {
  constructor(private http: HttpClient) {
  }
  upload(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('uploadFile', file, file.name);
    return this.http.post(`${environment.apiUrl}/file/upload`, formData, { reportProgress: true, observe: 'events' });
  }
}
