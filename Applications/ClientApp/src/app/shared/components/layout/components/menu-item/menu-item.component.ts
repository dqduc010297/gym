import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  @Input() iconType: string;
  @Input() url: string;
  @Input() title: string;
  @Input() isShowTitle = true;

  constructor() { }

  ngOnInit(): void {
  }

}
