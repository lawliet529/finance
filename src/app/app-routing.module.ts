import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PickListComponent } from './share/pick-list/pick-list.component';
import { TableComponent } from './share/table/table.component';
import { GalleriaComponent } from './share/galleria/galleria.component';
import { OrderListComponent } from './share/order-list/order-list.component';

const routes: Routes = [
  { path: 'galleria', component: GalleriaComponent },
  { path: 'picklist', component: PickListComponent },
  { path: 'table', component: TableComponent },
  { path: 'orderlist', component: OrderListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
