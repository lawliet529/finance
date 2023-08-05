import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PickListComponent } from './pick-list/pick-list.component';

import { PickListModule } from 'primeng/picklist';
import { GalleriaModule } from 'primeng/galleria';
import { TableModule } from 'primeng/table';
import { OrderListModule } from 'primeng/orderlist'
import { TagModule } from 'primeng/tag';
import { GalleriaComponent } from './galleria/galleria.component';
import { TableComponent } from './table/table.component';
import { OrderListComponent } from './order-list/order-list.component';

@NgModule({
  declarations: [
    PickListComponent,
    GalleriaComponent,
    TableComponent,
    OrderListComponent,
  ],
  imports: [
    CommonModule,
    PickListModule,
    GalleriaModule,
    TableModule,
    OrderListModule,
    TagModule
  ],
  exports: [PickListComponent, GalleriaComponent, TableComponent, OrderListComponent],
})
export class ShareModule { }
