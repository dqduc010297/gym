import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MediaFile } from 'src/app/album/core/models/media-file.model';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class AppFileAPIService {
    constructor(
        private http: HttpClient
    ) {
    }

    getAppFileById(id: number): Observable<MediaFile> {
        return this.http.get<MediaFile>(`${environment.apiUrl}/file?id=${id}`);
    }


    share(file: MediaFile): Observable<any> {
        return this.http.put<any>(`${environment.apiUrl}/file/share`, file);
    }
}
