import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CustomersComponent } from './customers.component';
import { ViewCustomersPageComponent } from './containers';
import { AddCustomersComponent } from './components/add-customers/add-customers.component';
import { ModCustomersComponent } from './components/mod-customers/mod-customers.component';
import { DetailsCustomerComponent } from './containers/detail-customers.component';

const routes: Routes = [
    {
        path: '',
        component: CustomersComponent,
        children: [
            { path: 'add-customers', component: AddCustomersComponent },
            { path: 'mod-customers', component: ModCustomersComponent },
            { path: 'view-customers-page', component: ViewCustomersPageComponent },
        ],
    },
    {
        path: 'customer/:id', component: DetailsCustomerComponent,
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule,
    ],
})
export class CustomersRoutingModule { }

export const routedComponents = [
    CustomersComponent,
    AddCustomersComponent,
    ViewCustomersPageComponent
];
