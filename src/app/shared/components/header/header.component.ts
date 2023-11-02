import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  items: MenuItem[];
  constructor() {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'TRANG CHỦ',
        routerLink: ''
      },
      {
        label: 'GIỚI THIỆU',
        routerLink: ''
      },
      {
        label: 'DỊCH VỤ',
        routerLink: ''
      },
      {
        label: 'DỰ ÁN',
        routerLink: ''
      },
      {
        label: 'TUYỂN DỤNG',
        routerLink: ''
      },
      {
        label: 'LIÊN HỆ',
        routerLink: ''
      },
    ];
  }
}
