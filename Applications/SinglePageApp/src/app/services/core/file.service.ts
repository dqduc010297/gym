import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/auth/user';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { LoginUser } from '../../models/auth/login';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class FileService {
  constructor(private http: HttpClient, private router: Router) {
  }
  upload(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('uploadFile', file, file.name);
    console.log(formData);
    return this.http.post(`${environment.apiUrl}/file/upload`, formData, { reportProgress: true, observe: 'events' });
  }
}
