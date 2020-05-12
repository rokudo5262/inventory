import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { StoreInformationComponent } from './store-infor.component';
import { StoreInforListComponent } from './container/store-information/store-information.component';
import { StoreDetail1Component } from './container/store-detail/store-detail.component';

const routes: Routes = [{
  path: '',
  component: StoreInformationComponent,
  children: [
    { path: 'store-information', component: StoreInforListComponent },
    { path: 'store-information/:id', component: StoreDetail1Component },
  ],
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoreInformationRoutingModule {
}
