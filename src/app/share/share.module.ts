import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataViewComponent } from './data-view/data-view.component';
import { PickListComponent } from './pick-list/pick-list.component';

import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { DataViewModule, DataViewLayoutOptions } from 'primeng/dataview';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';import { PickListModule } from 'primeng/picklist';
import { GalleriaModule } from 'primeng/galleria';
import { TableModule } from 'primeng/table';
import { GalleriaComponent } from './galleria/galleria.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    DataViewComponent


    PickListComponent,
    GalleriaComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    DataViewModule,
    RatingModule,
    TagModule,
    FormsModule,
    ButtonModule
  ],
  exports:[
    DataViewComponent,
    PickListModule,
    GalleriaModule,
    TableModule,
  ],
  exports: [PickListComponent, GalleriaComponent, TableComponent],
})
export class ShareModule { }
