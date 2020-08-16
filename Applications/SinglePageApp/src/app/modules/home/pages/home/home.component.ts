import { Component, OnInit } from '@angular/core';
import { InBodyService } from 'src/app/services/inbody/inbody.service';
import { InBodyDetail } from 'src/app/models/inbody/inbody-detail';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  inBodyDetail: InBodyDetail = new InBodyDetail();

  constructor(
    private inBodyService: InBodyService
  ) { }

  listOfData: number[] = [1];

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.inBodyService.getInBody().subscribe(
      result => {
        this.inBodyDetail = result;
      }
    );
  }

  onChange(result: Date): void {
    console.log('onChange: ', result);
  }
}
