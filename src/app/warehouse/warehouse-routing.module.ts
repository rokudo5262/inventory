import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WarehouseComponent } from './warehouse.component';
import { WarehousePageComponent } from './containers/warehouse-page/warehouse-page.component';
// import { WarehouseEditComponent } from './containers/warehouse-edit/warehouse-edit.component';
import { WarehouseDetailComponent } from './components/warehouse-detail/warehouse-detail.component';

const routes: Routes = [{
    path: '',
    component: WarehouseComponent,
    children: [
        { path: 'library', component: WarehousePageComponent, },
        { path: 'warehouse/:id', component: WarehouseDetailComponent, }
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class WarehouseRoutingModule {
}
