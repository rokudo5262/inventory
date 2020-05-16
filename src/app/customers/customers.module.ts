import { NgModule } from '@angular/core';
import {
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbSelectModule,
    NbLayoutModule,
    NbRadioModule,
    NbDatepickerModule,
    NbTreeGridModule,
    NbIconModule,
    NbTooltipModule,
    NbTabsetModule,
    NbCheckboxModule,
    NbListModule,
    NbTableModule,
    NbDialogModule,
} from '@nebular/theme';
import { ThemeModule } from '@app/@theme/theme.module';
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { TablesModule } from '@app/dashboard/tables/tables.module';
import { ViewCustomersPageComponent } from './containers';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { FeatureKey, reducer } from './reducers';
import { SortCustomersComponent } from './components/view-customers/sort-customers.component';
import { ViewCustomersComponent } from './components/view-customers/view-customers.component';
import { ModCustomersComponent } from './components/mod-customers/mod-customers.component';
import { ImportCustomersComponent } from './components/view-customers/import-customers/import-customers.component';
import { TabCustomerInfoComponent } from './components/mod-customers/tab-customer-info/tab-customer-info.component';
import { TabCustomerDebtComponent } from './components/mod-customers/tab-customer-debt/tab-customer-debt.component';
import { DialogCustomizeComponent } from './components/mod-customers/tab-customer-debt/btn-customize/dialog-customize.component';
import { DialogLiquidateComponent } from './components/mod-customers/tab-customer-debt/btn-liquidate/dialog-liquidate.component';
import { LiquidateInfoComponent } from './components/mod-customers/tab-customer-debt/btn-liquidate/liquidate-info.component';
import { LiquidateTableComponent } from './components/mod-customers/tab-customer-debt/btn-liquidate/liquidate-table.component';
import { DialogSmsComponent } from './components/view-customers/sendMsg-customers/dialog-sms.component';
import { LiquidateAutoComponent } from './components/mod-customers/tab-customer-debt/btn-liquidate/liquidate-auto.component';
import { CookieService } from 'ngx-cookie-service';
import { CustomerEffects } from './effects/customer.effects';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { CustomersAddComponent } from './components/customers-add/customers-add.component';
import { CustomersDetailComponent } from './components/customers-detail/customers-detail.component';
import { DetailsCustomerComponent } from './containers/detail-customers.component';

export const CONTAINERS = [
    ViewCustomersPageComponent,
    DetailsCustomerComponent,
];

export const COMPONENTS = [
    SortCustomersComponent,
    ViewCustomersComponent,
    CustomersAddComponent,
    ModCustomersComponent,
    CustomersDetailComponent,
    ImportCustomersComponent,
    TabCustomerInfoComponent,
    TabCustomerDebtComponent,
    DialogCustomizeComponent,
    DialogLiquidateComponent,
    LiquidateInfoComponent,
    LiquidateTableComponent,
    LiquidateAutoComponent,
    DialogSmsComponent,
];
@NgModule({
    imports: [
        ThemeModule,
        HttpClientModule,
        NbInputModule,
        NbCardModule,
        NbButtonModule,
        NbSelectModule,
        NbLayoutModule,
        NbRadioModule,
        NbDatepickerModule,
        NbTreeGridModule,
        NbIconModule,
        NbTooltipModule,
        TablesModule,
        NbTabsetModule,
        NbCheckboxModule,
        NbListModule,
        NbTableModule,
        NbDialogModule,
        FormsModule,
        ReactiveFormsModule,
        NbDialogModule.forChild(),
        Ng2SmartTableModule,
        CustomersRoutingModule,
        StoreModule.forFeature(FeatureKey, reducer),
        EffectsModule.forFeature([CustomerEffects]),
    ],
    declarations: [
        ...COMPONENTS,
        ...CONTAINERS,
        CustomersComponent,
    ],
    providers: [CookieService],
    entryComponents: [
        ViewCustomersComponent,
        ImportCustomersComponent,
        TabCustomerInfoComponent,
        TabCustomerDebtComponent,
        DialogCustomizeComponent,
        DialogLiquidateComponent,
        LiquidateInfoComponent,
        LiquidateTableComponent,
        LiquidateAutoComponent,
        DialogSmsComponent,
    ],
})

export class CustomersModule {}
