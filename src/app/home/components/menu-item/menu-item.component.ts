import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
})
export class MenuItemComponent implements OnInit {
  isViewMore = false;

  constructor() {}

  ngOnInit(): void {}

  viewMore(): void {
    this.isViewMore = !this.isViewMore;
  }
}
