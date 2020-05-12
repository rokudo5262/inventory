import { NgModule } from '@angular/core';
import {
  NbMenuModule,
  NbCardModule,
  NbDialogModule,
  NbRadioModule,
  NbInputModule,
  NbButtonModule
} from '@nebular/theme';
import { ThemeModule } from '@app/@theme/theme.module';
import { MiscellaneousModule } from '@dashboard/miscellaneous/miscellaneous.module';
import { TablesModule } from '@dashboard/tables/tables.module';
import { GoodsGroupPageComponent } from './components/goods-group-page.component';
import { GoodsGroupRoutingModule } from './goods-group-routing.module';
import { AddGoodsGroupComponent } from './containers';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { reducer, FeatureKey } from './reducers';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { GoodsGroupEffects } from './effects';

export const COMPONENTS = [
  GoodsGroupPageComponent,
];
export const CONTAINERS = [
  AddGoodsGroupComponent,
];
@NgModule({
  imports: [
    ThemeModule,
    GoodsGroupRoutingModule,
    NbMenuModule,
    TablesModule,
    NbInputModule,
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
    EffectsModule.forFeature([GoodsGroupEffects])
  ],
  declarations: [COMPONENTS, CONTAINERS],
  providers: [
    CookieService,
  ],
  entryComponents: [
    AddGoodsGroupComponent,
  ],
})
export class GoodsGroupModule { }
