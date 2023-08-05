import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  menu = [
    { name: 'Galleria', url: '/galleria' },
    { name: 'PickList', url: '/picklist' },
    { name: 'Table', url: '/table' },
    { name: 'Orderlist', url: '/orderlist'}
  ];
}
