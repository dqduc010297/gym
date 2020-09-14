import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { Image } from 'src/app/modules/album/shared/models/image.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss']
})
export class UploaderComponent implements OnInit {
  @Input() uploadStyle: string = 'upload';
  uploadAPI: string = this.uploadStyle === 'storage' ? environment.uploadURL.storage : environment.uploadURL.upload;

  @Input() isShowAfterUpload = false;
  @Output() uploaded: EventEmitter<Image> = new EventEmitter<Image>();

  loading = false;

  constructor() { }

  ngOnInit(): void {
  }


  handleChange(info: { file: NzUploadFile }): void {
    switch (info.file.status) {
      case 'uploading':
        this.loading = true;
        break;
      case 'done':
        this.loading = false;
        this.uploaded.emit(info.file.response);
        break;
      case 'error':
        this.loading = false;
        break;
    }
  }

}
