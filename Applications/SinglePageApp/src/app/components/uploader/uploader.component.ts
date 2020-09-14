import { EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { Image } from 'src/app/modules/album/shared/models/image.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss']
})
export class UploaderComponent implements OnInit, OnChanges {
  @Input() uploadStyle: string;
  uploadAPI: string = environment.uploadURL.upload;

  @Input() uploadedPath: string;
  @Input() isShowAfterUpload = false;
  @Input() isAvatar = false;
  @Output() uploaded: EventEmitter<Image> = new EventEmitter<Image>();

  loading = false;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.uploadStyle.currentValue) {
      this.uploadAPI = this.uploadStyle === 'storage' ? environment.uploadURL.storage : environment.uploadURL.upload;
    }
  }

  ngOnInit(): void {
  }


  handleChange(info: { file: NzUploadFile }): void {
    switch (info.file.status) {
      case 'uploading':
        this.loading = true;
        break;
      case 'done':
        this.loading = false;
        this.uploadedPath = info.file?.response.uploadedPath;
        this.uploaded.emit(info.file.response);
        break;
      case 'error':
        this.loading = false;
        break;
    }
  }

}
