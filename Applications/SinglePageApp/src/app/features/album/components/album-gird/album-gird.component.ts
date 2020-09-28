import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { UploadedFile } from 'src/app/components/uploader/uploaded-file.model';
import { LoaderService } from 'src/app/services/core/loader.service';
import { MediaFile } from '../../shared/models/media-file.model';
import { AlbumService } from '../../shared/services/album.service';

@Component({
  selector: 'app-album-gird',
  templateUrl: './album-gird.component.html',
  styleUrls: ['./album-gird.component.scss']
})

export class AlbumGirdComponent implements OnInit {
  @Input() mediaFiles: MediaFile[] = [];

  inputValue?: string;
  selectedMediaFile: MediaFile = new MediaFile();
  mentioned: number[] = [];

  tplModal?: NzModalRef;
  tplModalButtonLoading = false;

  constructor(
    private modal: NzModalService,
    public loaderService: LoaderService,
    private albumService: AlbumService,
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
      }
    });
  }

  cancel() {
    this.inputValue = '';
    this.tplModal.destroy();
  }

  share() {
    this.albumService.share(this.selectedMediaFile).subscribe(
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
      isImage: event.contentType.includes('image'),
    }].concat(this.mediaFiles);
  }
}
