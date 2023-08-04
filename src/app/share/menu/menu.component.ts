import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }


  items: MenuItem[] = [];
  activeItem!: MenuItem;
  ngOnInit(): void {
    this.items = [
      { label: 'Organization', routerLink: '/orgtree' },
      { label: 'Edit' },
      { label: 'Documentation' },
      { label: 'Settings' }
    ];
    this.activeItem = this.items[0];
  }
  onTabClick(event: any) {
    // Update the activeItem when the "Organization" tab is clicked
    if (event.item.label === 'Organization') {
      this.activeItem = event.item;
    }
  }
}
