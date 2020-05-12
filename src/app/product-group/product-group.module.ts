import { NgModule } from '@angular/core';
import {
  NbMenuModule,
  NbCardModule,
  NbDialogModule,
  NbRadioModule,
  NbInputModule,
  NbButtonModule,
  NbSelectModule,
  NbTabsetModule,
} from '@nebular/theme';
import { ThemeModule } from '@app/@theme/theme.module';
import { MiscellaneousModule } from '@dashboard/miscellaneous/miscellaneous.module';
import { TablesModule } from '@dashboard/tables/tables.module';
import { ProductGroupRoutingModule } from './product-group-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { reducer, FeatureKey } from './reducers';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ProductGroupEffects } from './effects';
import { ViewProductGroupComponent } from './components/product-group/view-product-group.component';
import { ProductGroupPageComponent } from './containers/product-group-page.component';
import { ProductGroupComponent } from './product-group.component';
import { AddProductGroupComponent } from './components/product-group/add-product-group.component';
import { BundleComponent } from './components/product-group-detail/bundle/bundle-detail/bundle.component';
import { BundleGroupComponent } from './components/product-group-detail/bundle/bundle-group.component';
import { BundleListComponent } from './components/product-group-detail/bundle/bundle-list/bundle-list.component';
import { GroupPageComponent } from './components/product-group-detail/group/group-page.component';
import { GroupListComponent } from './components/product-group-detail/group/group-list/group-list.component';
import { ProductPageComponent } from './components/product-group-detail/product/product-page.component';
import { ProductListComponent } from './components/product-group-detail/product/product-list/product-list.component';
import { GroupComponent } from './components/product-group-detail/group/group-detail/group.component';
import { ProductComponent } from './components/product-group-detail/product/product-detail/product.component';
import { ViewBundleDetailComponent } from './components/product-group-detail/bundle/bundle-list/view-bundle-detail/view-bundle-detail.component';
import { ViewGroupDetailComponent } from './components/product-group-detail/group/group-list/view-group-detail/view-group-detail.component';
import { ViewProductDetailComponent } from './components/product-group-detail/product/product-list/view-product-detail/view-product-detail.component';

export const COMPONENTS = [
  ViewProductGroupComponent,
  AddProductGroupComponent,
  BundleGroupComponent,
  BundleListComponent,
  ViewBundleDetailComponent,
  BundleComponent,
  GroupPageComponent,
  GroupListComponent,
  ViewGroupDetailComponent,
  GroupComponent,
  ProductPageComponent,
  ProductListComponent,
  ViewProductDetailComponent,
  ProductComponent,
];
export const CONTAINERS = [
  ProductGroupPageComponent,
  ProductGroupComponent,
];
@NgModule({
  imports: [
    ThemeModule,
    ProductGroupRoutingModule,
    NbMenuModule,
    TablesModule,
    NbInputModule,
    NbSelectModule,
    NbTabsetModule,
    NbRadioModule,
    NbDialogModule.forChild(),
    Ng2SmartTableModule,
    FormsModule,
    ReactiveFormsModule,
    NbButtonModule,
    MiscellaneousModule,
    NbCardModule,
    HttpClientModule,
    StoreModule.forFeature(FeatureKey, reducer),
    EffectsModule.forFeature([ProductGroupEffects])
  ],
  declarations: [COMPONENTS, CONTAINERS],
  entryComponents: [
    AddProductGroupComponent,
  ],
})
export class ProductGroupModule { }
