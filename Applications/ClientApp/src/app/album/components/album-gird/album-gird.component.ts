import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { MediaFile } from 'src/app/album/core/models/media-file.model';
import { LoaderService } from 'src/app/core/services/loader.service';
import { UploadedFile } from 'src/app/shared/components/uploader/uploaded-file.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-album-gird',
  templateUrl: './album-gird.component.html',
  styleUrls: ['./album-gird.component.scss']
})

export class AlbumGirdComponent implements OnInit {
  @Input() mediaFiles: MediaFile[] = [];
  @Input() haveUploadButton = true;

  constructor(
    public loaderService: LoaderService,
    public element: ElementRef) { }

  ngOnInit(): void {
  }

  uploaded(event: UploadedFile) {
    this.mediaFiles = [{
      id: event.id,
      url: event.uploadedPath,
      sharedWith: [],
      isTemp: false,
      isVideo: event.contentType.includes('video'),
    }].concat(this.mediaFiles);
  }

  viewMedia(media: MediaFile) {
    window.open(
      `${window.location.origin}/#/media-view/${media.id}`,
      '_blank'
    );
  }
  image = 'https://images.unsplash.com/photo-1443890923422-7819ed4101c0?fm=jpg';
}
