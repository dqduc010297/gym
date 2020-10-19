import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MediaFile } from 'src/app/album/core/models/media-file.model';

@Component({
  selector: 'app-media-view',
  templateUrl: './media-view.component.html',
  styleUrls: ['./media-view.component.scss']
})
export class MediaViewComponent implements OnInit {
  isImage = true;
  mediaUrl: string;

  constructor(
    public activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      param => {
        this.mediaUrl = `https://www.dropbox.com/s/${decodeURIComponent(param.url)}`;
      }
    );
    this.activatedRoute.queryParams.subscribe(
      query => {
        this.isImage = query?.isImage;
      }
    );
  }

}
