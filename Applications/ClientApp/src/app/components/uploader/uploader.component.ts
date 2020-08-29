import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FileService } from 'src/app/services/core/file.service';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss']
})
export class UploaderComponent implements OnInit {
  isUploading = false;
  isUploaded = false;

  @Input() uploadedUrl: string;
  @Input() description: string;
  @Input() enable: boolean;
  @Output() returnUrl: EventEmitter<string> = new EventEmitter<string>();

  constructor(private fileService: FileService) { }

  ngOnInit(): void {
    if (!this.uploadedUrl) {
      this.uploadedUrl = 'assets/images/nutritions/oblique.svg';
    }
  }

  onUpload(files: any) {
    if (files.length !== 1) {
      return;
    }
    this.isUploading = true;
    this.fileService.upload((files[0] as File)).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
      }
      else if (event.type === HttpEventType.Response) {
        this.isUploading = false;
        this.isUploaded = true;
        this.uploadedUrl = event.body.uploadedPath;
      }
    });
  }

}
