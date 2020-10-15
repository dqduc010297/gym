import { Injectable } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { AlbumAPIService } from './album.api.service';
import { Album } from './models/album.model';
import { MediaFile } from './models/media-file.model';

@Injectable({ providedIn: 'root' })
export class AlbumService {
  constructor(
    private deviceDetectorService: DeviceDetectorService,
    private albumAPIService: AlbumAPIService
  ) {
  }

  public addTempImage(album: Album): Album {
    const temp = new MediaFile();
    temp.isTemp = true;
    let max = 0;
    if (this.deviceDetectorService.isDesktop) {
      max = 12;
    }
    else if (this.deviceDetectorService.isMobile) {
      max = 2;
    }
    else {
      max = 4;
    }
    for (let i = 0; i < max - album.myMediaFiles.length; i++) {
      album.myMediaFiles.push(temp);
    }
    for (let i = 0; i < max - album.sharedMediaFiles.length; i++) {
      album.sharedMediaFiles.push(temp);
    }
    return album;
  }
}
