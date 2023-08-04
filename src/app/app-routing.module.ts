import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PickListComponent } from './share/pick-list/pick-list.component';
import { TableComponent } from './share/table/table.component';
import { GalleriaComponent } from './share/galleria/galleria.component';

const routes: Routes = [
  {path: 'picklist', component: PickListComponent},
  {path: 'table', component: TableComponent},
  {path: 'galleria', component: GalleriaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
