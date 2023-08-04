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
    { name: 'Upload Img', url: '/upload' },
    // { name: 'OrgTree', url: '/orgtree' },
    { name: 'Menu', url: '/menu' },
  ];
}
