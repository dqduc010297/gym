import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/services/core/loader.service';
import { AlbumResponse } from '../../responses/album.response';
import { AlbumService } from '../../shared/services/album.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit{

  album: AlbumResponse = new AlbumResponse();

  constructor(
    public loaderService: LoaderService,
    private albumService: AlbumService
  ) { }

  ngOnInit(): void {
    this.albumService.getImages().subscribe(
      result => {
        this.album = result;
      }
    );
  }


}
