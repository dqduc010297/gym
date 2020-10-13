import { Component, OnInit } from '@angular/core';
import { InBodyStandardAPIService } from 'src/app/inbody/core/services/inbody-standard.api.service';
import { LoaderService } from 'src/app/core/services/loader.service';
import { InBodyStandard } from '../../core/models/inBody-standard';
import { InBody } from '../../core/models/inbody.model';

@Component({
  selector: 'app-new-inbody',
  templateUrl: './new-inbody.component.html',
  styleUrls: ['./new-inbody.component.scss']
})
export class NewInbodyComponent implements OnInit {
  userId = 0;
  inBodyDetail: InBody = new InBody();
  inBodyStandard: InBodyStandard = new InBodyStandard();

  constructor(
    private inBodyStandardAPIService: InBodyStandardAPIService,
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
    this.inBodyStandardAPIService.getLatestInBody(event).subscribe(
      result => {
        this.inBodyDetail.inBodyStandard = result;
      }
    );
  }
}
