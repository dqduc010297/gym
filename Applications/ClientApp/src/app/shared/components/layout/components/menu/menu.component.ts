import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() menuType: string;
  @Input() role: string;

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
