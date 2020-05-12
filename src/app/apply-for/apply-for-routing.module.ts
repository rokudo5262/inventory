import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ApplyForHeaderPageComponent } from './containers/apply-for-page.component';
import { ApplyForComponent } from './apply-for.component';
import { DetailComponent } from './containers/apply-for-header/detail/af-header.component';
import { ApplyForCustomerPageComponent } from './containers/apply-for-customer/apply-for-customer.component';
import { CustomerDetailComponent } from './containers/apply-for-customer/detail/af-customer.component';
import { ApplyForSecondaryCustomerPageComponent } from './containers/apply-for-secondary/apply-for-secondary.component';
import { SecondaryDetailComponent } from './containers/apply-for-secondary/detail/af-secondary.component';

const routes: Routes = [{
  path: '', component: ApplyForComponent,
  children: [
    { path: 'applyforheader', component: ApplyForHeaderPageComponent },
    { path: 'applyforheader/:id', component: DetailComponent },
    { path: 'applyforcustomer', component: ApplyForCustomerPageComponent },
    { path: 'applyforcustomer/:id', component: CustomerDetailComponent },
    { path: 'applyforsecondarycustomer', component: ApplyForSecondaryCustomerPageComponent },
    { path: 'applyforsecondarycustomer/:id', component: SecondaryDetailComponent },
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplyForRoutingModule { }
