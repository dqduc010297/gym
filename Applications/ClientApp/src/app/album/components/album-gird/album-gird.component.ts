import { Component, ElementRef, Input, OnInit, TemplateRef } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { MediaFile } from 'src/app/album/core/models/media-file.model';
import { AlbumAPIService } from 'src/app/album/core/album.api.service';
import { LoaderService } from 'src/app/core/services/loader.service';
import { UploadedFile } from 'src/app/shared/components/uploader/uploaded-file.model';
import { AlbumService } from '../../core/album.service';
import { Router } from '@angular/router';
import { decode } from 'querystring';

@Component({
  selector: 'app-album-gird',
  templateUrl: './album-gird.component.html',
  styleUrls: ['./album-gird.component.scss']
})

export class AlbumGirdComponent implements OnInit {
  @Input() mediaFiles: MediaFile[] = [];
  @Input() haveUploadButton = true;

  inputValue?: string;
  selectedMediaFile: MediaFile = new MediaFile();
  mentioned: number[] = [];

  tplModal?: NzModalRef;
  tplModalButtonLoading = false;


  numArr = Array.from(Array(100), (_, x) => x);

  get numImages(): number {
    return this.element.nativeElement.querySelectorAll('img').length;
  }


  constructor(
    private modal: NzModalService,
    public loaderService: LoaderService,
    private albumAPIService: AlbumAPIService,
    public element: ElementRef,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  createTplModal(mediaFile: MediaFile, tplContent: TemplateRef<{}>, tplFooter: TemplateRef<{}>): void {
    this.selectedMediaFile = mediaFile;
    this.tplModal = this.modal.create({
      nzContent: tplContent,
      nzFooter: tplFooter,
      nzMaskClosable: false,
      nzClosable: false,
      nzKeyboard: false,
      nzComponentParams: {
        value: 'Template Context'
      },
      nzBodyStyle: { height: '100%' },
    });
  }

  cancel() {
    this.inputValue = '';
    this.tplModal.destroy();
  }

  share() {
    this.albumAPIService.share(this.selectedMediaFile).subscribe(
      result => {
        this.tplModal.destroy();
      }
    );
  }

  uploaded(event: UploadedFile) {
    this.mediaFiles = [{
      id: event.id,
      url: event.uploadedPath,
      sharedWith: [],
      isTemp: false,
      isImage: event.contentType.includes('image'),
    }].concat(this.mediaFiles);
  }

  viewMedia(media: MediaFile) {
    // remove hosting image
    let param = media.url.replace('https://www.dropbox.com/s/', '');
    // encode url
    param = encodeURIComponent(param);
    window.open(`${window.location.origin}/#/media-view/${param}?isImage=${media.isImage}`, '_blank');
  }
}
