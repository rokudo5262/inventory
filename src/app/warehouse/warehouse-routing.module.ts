import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WarehouseComponent } from './warehouse.component';
import { WarehousePageComponent } from './containers/warehouses.component';
// import { WarehouseEditComponent } from './containers/warehouse-edit/warehouse-edit.component';
import { WarehouseDetailComponent } from './containers/warehouse-detail/warehouse-detail.component';

const routes: Routes = [{
    path: '',
    component: WarehouseComponent,
    children: [
        {
            path: 'warehousepage',
            component: WarehousePageComponent,
        },
        // {
        //     path: 'warehousenew',
        //     component: WarehouseEditComponent,
        // },
        {
            path: 'warehouse/:id',
            component: WarehouseDetailComponent,
        }
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class WarehouseRoutingModule {
}
