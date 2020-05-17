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
import { GoodsGroupPageComponent } from './containers/goods-group-page/goods-group-page.component';
import { GoodsGroupRoutingModule } from './goods-group-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { reducer, FeatureKey } from './reducers';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { GoodsGroupEffects } from './effects';
import { GoodsGroupComponent } from './goods-group.component';
import { GoodsGroupAddComponent } from './components/goods-group-add/goods-group-add.component';
import { GoodsGroupDetailComponent } from './components/goods-group-detail/goods-group-detail.component';
import { GoodsGroupPreviewComponent } from './components/goods-group-preview/goods-group-preview.component';
import { GoodsGroupUpdateComponent } from './components/goods-group-update/goods-group-update.component';

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
  declarations: [
    GoodsGroupComponent,
    GoodsGroupPageComponent,
    GoodsGroupAddComponent,
    GoodsGroupDetailComponent,
    GoodsGroupPreviewComponent,
    GoodsGroupUpdateComponent,
  ],
  providers: [
    CookieService,
  ],
  entryComponents: [
    GoodsGroupAddComponent,
    GoodsGroupUpdateComponent,
  ],
})
export class GoodsGroupModule { }
