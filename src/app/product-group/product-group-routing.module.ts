import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProductGroupPageComponent } from './containers/product-group-page.component';
import { BundleGroupComponent } from './components/product-group-detail/bundle/bundle-group.component';
import { GroupPageComponent } from './components/product-group-detail/group/group-page.component';
import { ProductPageComponent } from './components/product-group-detail/product/product-page.component';
import { ViewBundleDetailComponent } from './components/product-group-detail/bundle/bundle-list/view-bundle-detail/view-bundle-detail.component';
import { ViewGroupDetailComponent } from './components/product-group-detail/group/group-list/view-group-detail/view-group-detail.component';
import { ViewProductDetailComponent } from './components/product-group-detail/product/product-list/view-product-detail/view-product-detail.component';

const routes: Routes = [
  { path: '', component: ProductGroupPageComponent },
  { path: 'product-group/Bundle', component: BundleGroupComponent },
  { path: 'product-group/Bundle/:lineID', component: ViewBundleDetailComponent },
  { path: 'product-group/Group', component: GroupPageComponent },
  { path: 'product-group/Group/:lineID', component: ViewGroupDetailComponent },
  { path: 'product-group/Product', component: ProductPageComponent },
  { path: 'product-group/Product/:lineID', component: ViewProductDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductGroupRoutingModule { }
