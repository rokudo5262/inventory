import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// modules
import { ThemeModule } from '../@theme/theme.module';
import { WarehouseRoutingModule } from './warehouse-routing.module';
// Components
import { WarehouseComponent } from './warehouse.component';
import { WarehousePageComponent } from './containers/warehouse-page/warehouse-page.component';
// import { FeatureKey, reducer } from './reducers';
import {
    NbCardModule, NbButtonModule,
    NbTabsetModule, NbInputModule
} from '@nebular/theme';
import { StoreModule } from '@ngrx/store';
import { FeatureKey, reducer } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { WarehouseListComponent } from './components/warehouse-list/warehouse-list.component';
import { WarehouseEffects } from './effects/warehouse.effects';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CommonModule } from '@angular/common';
import { WarehouseDetailComponent } from './components/warehouse-detail/warehouse-detail.component';
import { WarehouseAddComponent } from './components/warehouse-add/warehouse-add.component';
import { CookieService } from 'ngx-cookie-service';
import { WarehouseSmartTableComponent } from './components/warehouse-smart-table/warehouse-smart-table.component';
import { WarehousePreviewComponent } from './components/warehouse-preview/warehouse-preview.component';
import { WarehouseNormalTableComponent } from './components/warehouse-normal-table/warehouse-normal-table.component';
import { WarehouseSearchComponent } from './components/warehouse-search/warehouse-search.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ThemeModule,
        NbCardModule,
        NbButtonModule,
        NbTabsetModule,
        WarehouseRoutingModule,
        Ng2SmartTableModule,
        NbInputModule,
        ReactiveFormsModule,
        StoreModule.forFeature(FeatureKey, reducer),
        EffectsModule.forFeature([WarehouseEffects]),
    ],
    declarations: [
        WarehouseComponent,
        WarehousePageComponent,
        WarehouseSearchComponent,
        WarehouseListComponent,
        WarehouseAddComponent,
        WarehouseDetailComponent,
        WarehouseNormalTableComponent,
        WarehouseSmartTableComponent,
        WarehousePreviewComponent,
    ],
    providers: [
        CookieService,
    ],
    entryComponents: [
        WarehouseAddComponent,
    ],
})
export class WarehouseModule {
}
