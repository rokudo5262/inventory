import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SecondaryCustomerListComponent } from './container/se-customer-list/se-customer-list.componet';
import { SmartTableSecondaryCustomerShipToAddressComponent } from './component/smart-table-se-customer-s-to-a/smart-table-se-customer-s-to-a.component';
import { SecondaryCustomerShipToAddressDetailComponent } from './component/smart-table-se-customer-s-to-a/edit-s-to-a/edit-s-to-a.componet';
import { SecondaryCustomerDetailComponent } from './component/smart-table-se-customer/se-customer-edit-detail/se-customer-edit-detial.component';

const routes: Routes = [
  { path: '', component: SecondaryCustomerListComponent },
  { path: 'SecondaryCustomerShipToAddress/:id', component: SecondaryCustomerShipToAddressDetailComponent },
  { path: 'SecondaryCustomerShipToAddress', component: SmartTableSecondaryCustomerShipToAddressComponent },
  { path: 'secondarycustomer/:id', component: SecondaryCustomerDetailComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecondaryCustomerRoutingModule { }
