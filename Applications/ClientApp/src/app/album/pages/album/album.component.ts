import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/album/core/models/album.model';
import { AlbumAPIService } from 'src/app/album/core/album.api.service';
import { LoaderService } from 'src/app/core/services/loader.service';
import { AlbumService } from '../../core/album.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit{

  album: Album = new Album();

  constructor(
    public loaderService: LoaderService,
    private albumAPIService: AlbumAPIService,
    private albumService: AlbumService,
  ) { }

  ngOnInit(): void {
    this.albumAPIService.getImages().subscribe(
      result => {
        this.album = this.albumService.addTempImage(result);
      }
    );
  }
}
