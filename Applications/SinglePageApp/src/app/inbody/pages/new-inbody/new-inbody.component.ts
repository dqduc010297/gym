import { Component, OnInit } from '@angular/core';
import { InBodyDetail } from 'src/app/core/models/inbody/inbody-detail';
import { InBodyStandard } from 'src/app/core/models/inbody/inBody-standard';
import { InBodyStandardService } from 'src/app/core/services/inbody-standard.service';
import { LoaderService } from 'src/app/core/services/loader.service';

@Component({
  selector: 'app-new-inbody',
  templateUrl: './new-inbody.component.html',
  styleUrls: ['./new-inbody.component.scss']
})
export class NewInbodyComponent implements OnInit {
  userId = 0;
  inBodyDetail: InBodyDetail = new InBodyDetail();
  inBodyStandard: InBodyStandard = new InBodyStandard();

  constructor(
    private inBodyStandardService: InBodyStandardService,
    public loaderService: LoaderService,
  ) { }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.inBodyDetail);
    // this.inBodyService.createInBody(this.inBodyDetail).subscribe(
    //   result => {
    //     console.log(result);
    //   }
    // );
  }

  selectedUser(event: number) {
    this.userId = event;
    this.inBodyStandardService.getLatestInBody(event).subscribe(
      result => {
        this.inBodyDetail.inBodyStandard = result;
      }
    );
  }
}
