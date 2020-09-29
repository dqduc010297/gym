import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/core/models/album.model';
import { AlbumAPIService } from 'src/app/core/services/api/album.api.service';
import { LoaderService } from 'src/app/core/services/loader.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit{

  album: Album = new Album();

  constructor(
    public loaderService: LoaderService,
    private albumAPIService: AlbumAPIService
  ) { }

  ngOnInit(): void {
    this.albumAPIService.getImages().subscribe(
      result => {
        this.album = result;
      }
    );
  }


}
