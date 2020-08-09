import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
  uploadedUrl: string;
  @Output() returnUrl: EventEmitter<string> = new EventEmitter<string>();

  constructor(private fileService: FileService) { }

  ngOnInit(): void {
  }

  onUpload(files: any) {
    console.log(files);
    if (files.length !== 1) {
      return;
    }
    this.isUploading = true;
    this.fileService.upload((files[0] as File)).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        console.log(Math.round(100 * event.loaded / event.total));
      }
      else if (event.type === HttpEventType.Response) {
        this.isUploading = false;
        this.isUploaded = true;
        this.uploadedUrl = event.body.uploadedPath;
      }
    });
  }

}
