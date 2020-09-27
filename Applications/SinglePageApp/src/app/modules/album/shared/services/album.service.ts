import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AlbumResponse } from '../../responses/album.response';
import { MediaFile } from '../models/media-file.model';

@Injectable({ providedIn: 'root' })
export class AlbumService {

    constructor(
        private http: HttpClient
    ) {
    }

    getImages(): Observable<AlbumResponse> {
        return this.http.get<AlbumResponse>(`${environment.apiUrl}/album`);
    }

    share(image: MediaFile): Observable<any> {
        return this.http.put<any>(`${environment.apiUrl}/image`, image);
    }
}
