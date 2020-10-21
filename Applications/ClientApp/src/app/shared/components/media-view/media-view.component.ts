import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { MediaFile } from 'src/app/album/core/models/media-file.model';
import { AppFileAPIService } from 'src/app/core/services/api/app-file.api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-media-view',
  templateUrl: './media-view.component.html',
  styleUrls: ['./media-view.component.scss']
})
export class MediaViewComponent implements OnInit {
  url: string;
  isVideo: boolean;
  id: number;

  mediaFile: MediaFile = new MediaFile();
  inputValue?: string;

  tplModal?: NzModalRef;
  tplModalButtonLoading = false;

  constructor(
    private modal: NzModalService,
    public activatedRoute: ActivatedRoute,
    private appFileAPIService: AppFileAPIService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      param => {
        this.url = decodeURIComponent(`${environment.dropboxHost}${param.url}`);
      }
    );
    this.activatedRoute.queryParams.subscribe(
      query => {
        this.isVideo = query.isVideo;
        this.id = query.id;
      }
    );
  }

  loadData(id: number) {
    this.appFileAPIService.getAppFileById(id).subscribe(
      result => {
        this.mediaFile = result;
      }
    );
  }

  createTplModal(tplContent: TemplateRef<{}>, tplFooter: TemplateRef<{}>): void {
    this.loadData(this.id);
    this.tplModal = this.modal.create({
      nzContent: tplContent,
      nzFooter: tplFooter,
      nzMaskClosable: false,
      nzClosable: false,
      nzKeyboard: false,
      nzBodyStyle: { height: '100%' },
      nzTitle: 'Chia sẻ hình ảnh'
    });
  }

  cancel() {
    this.inputValue = '';
    this.tplModal.destroy();
  }

  share() {
    this.appFileAPIService.share(this.mediaFile).subscribe(
      result => {
        this.tplModal.destroy();
      }
    );
  }
}
