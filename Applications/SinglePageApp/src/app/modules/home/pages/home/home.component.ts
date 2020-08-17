import { Component, OnInit } from '@angular/core';
import { InBodyService } from 'src/app/services/inbody/inbody.service';
import { InBodyDetail } from 'src/app/models/inbody/inbody-detail';
import { LoaderService } from 'src/app/services/core/loader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  inBodyDetail: InBodyDetail = new InBodyDetail();

  constructor(
    private inBodyService: InBodyService,
    public loaderService: LoaderService,
  ) { }

  listOfData: number[] = [1];

  ngOnInit(): void {
    this.loadLatestMyInBody();
  }

  loadLatestMyInBody() {
    this.inBodyService.getLatestInBody().subscribe(
      result => {
        this.inBodyDetail = result;
      }
    );
  }

  loadMyInBody() {
    this.inBodyService.getLatestInBody().subscribe(
      result => {
        this.inBodyDetail = result;
      }
    );
  }

  onChange(result: Date): void {
    this.inBodyService.getInBody(result).subscribe(
      result => {
        console.log(result);
      }
    );
  }
}
