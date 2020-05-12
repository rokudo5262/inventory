import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// modules
import { ThemeModule } from '../@theme/theme.module';
import { WarehouseRoutingModule } from './warehouse-routing.module';

// Components
import { WarehouseComponent } from './warehouse.component';
import { WarehousePageComponent } from './containers/warehouses.component';
// import { FeatureKey, reducer } from './reducers';
import { NbCardModule, NbButtonModule,
    NbTabsetModule, NbInputModule } from '@nebular/theme';

import { StoreModule } from '@ngrx/store';
import { FeatureKey, reducer } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { ListComponent } from './containers/warehouse-list/warehouse-list.component';
import { WarehouseListComponent } from './components/warehouse-list/warehouse-list.component';
import { WarehouseEffects } from './effects/warehouse.effects';
import { WarehouseSmartTableComponent } from './containers/smart-table/warehouse-smart-table.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CommonModule } from '@angular/common';
import { WarehouseDetailComponent } from './containers/warehouse-detail/warehouse-detail.component';
import { WarehouseDComponent } from './components/warehouse-detail.component';
import { WarehouseNewComponent } from './containers/warehouse-new/warehouse-new.component';
import { CookieService } from 'ngx-cookie-service';
export const CONTAINERS = [
    WarehousePageComponent,
    ListComponent,
    WarehouseDetailComponent,
    WarehouseNewComponent,

];
export const COMPONENTS = [
    WarehouseComponent,
    WarehouseDetailComponent,
    WarehouseListComponent,
    WarehouseSmartTableComponent,
    WarehouseDComponent,
];

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
    declarations: [CONTAINERS, COMPONENTS],
    providers: [ CookieService ],
    entryComponents: [
        WarehouseNewComponent,
    ]
})

export class WarehouseModule {
}
