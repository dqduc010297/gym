import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Album } from './models/album.model';
import { MediaFile } from './models/media-file.model';

@Injectable({ providedIn: 'root' })
export class AlbumAPIService {

  constructor(
    private http: HttpClient
  ) {
  }

  getImages(): Observable<Album> {
    return this.http.get<Album>(`${environment.apiUrl}/album`);
  }

  share(image: MediaFile): Observable<any> {
    return this.http.put<any>(`${environment.apiUrl}/album/share`, image);
  }
}
