import { Component, OnInit } from '@angular/core';
import { InBodyDetail } from 'src/app/models/inbody/inbody-detail';
import { InBodyStandardService } from 'src/app/services/inbody/inbody-standard.service';
import { InBodyService } from 'src/app/services/inbody/inbody.service';
import { LoaderService } from 'src/app/services/core/loader.service';

@Component({
  selector: 'app-new-inbody',
  templateUrl: './new-inbody.component.html',
  styleUrls: ['./new-inbody.component.scss']
})
export class NewInbodyComponent implements OnInit {
  inBodyDetail: InBodyDetail = new InBodyDetail();

  constructor(
    private inBodyStandardService: InBodyStandardService,
    private inBodyService: InBodyService,
    public loaderService: LoaderService
  ) { }

  ngOnInit(): void {
    this.inBodyStandardService.getLatestInBody().subscribe(
      result => {
        this.inBodyDetail = result;
      }
    );
  }

  submit() {
    this.inBodyService.createInBody(this.inBodyDetail).subscribe(
      result => {
        console.log(result);
      }
    );
  }
}
