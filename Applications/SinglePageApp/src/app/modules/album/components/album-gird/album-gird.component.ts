import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { SharedUser } from 'src/app/models/user/shared-user';
import { LoaderService } from 'src/app/services/core/loader.service';
import { Image } from '../../shared/models/image.model';
import { AlbumService } from '../../shared/services/album.service';

@Component({
  selector: 'app-album-gird',
  templateUrl: './album-gird.component.html',
  styleUrls: ['./album-gird.component.scss']
})

export class AlbumGirdComponent implements OnInit {
  @Input() images: Image[] = [];

  inputValue?: string;
  selectedImage: Image = new Image();
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

  createTplModal(image: Image, tplContent: TemplateRef<{}>, tplFooter: TemplateRef<{}>): void {
    this.selectedImage = image;
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
    console.log(this.selectedImage);
    this.albumService.share(this.selectedImage).subscribe(
      result => {
        this.tplModal.destroy();
      }
    );
  }

  uploaded(event: any) {
    this.images = [{
      id: event.id,
      url: event.uploadedPath,
      sharedWith: [],
    }].concat(this.images);
  }
}
