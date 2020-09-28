import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-inbody-image',
  templateUrl: './inbody-image.component.html',
  styleUrls: ['./inbody-image.component.scss']
})
export class InbodyImageComponent implements OnInit {
@Input() imageUrl: string;
@Input() date: Date;
  constructor() { }

  ngOnInit(): void {
  }

}
