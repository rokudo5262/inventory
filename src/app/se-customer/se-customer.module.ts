import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    NbDialogModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    NbTabsetModule,
    NbSelectModule,
    NbToggleModule,
    NbCheckboxModule
} from '@nebular/theme';
import { ThemeModule } from '@app/@theme/theme.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { SecondaryCustomerComponent } from './se-customer.componet';
import { SecondaryCustomerListComponent } from './container/se-customer-list/se-customer-list.componet';
import { SecondaryCustomerRoutingModule } from './se-customer-routing.module';
import { SmartTableSecondaryCustomerShipToAddressComponent } from './component/smart-table-se-customer-s-to-a/smart-table-se-customer-s-to-a.component';
import { SmartTableSecondaryCustomerComponent } from './component/smart-table-se-customer/smart-table-se-customer.component';
import { StoreModule } from '@ngrx/store';
import { FeatureKey, reducer } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { SecondaryCustomerEffects } from './effect/se-customer-list.effect';
import { SecondaryCustomerShipToAddressEffects } from './effect/se-customer-s-to-a.effect';
import { SecondaryCustomerAddComponent } from './component/smart-table-se-customer/add-smart-table-se-customer/add-smart-table-se-customer.component';
import { SecondaryCustomerstoaAddComponent } from './component/smart-table-se-customer-s-to-a/add-s-to-a/add-s-to-a.component';
import { Ng2CompleterModule } from 'ng2-completer';
import { SecondaryCustomerstoaEditDialogComponent } from './component/smart-table-se-customer-s-to-a/edit-detail-s-to-a-dialog/edit-detail-s-to-a-dialog.component';
import { SecondaryCustomerShipToAddressDetailComponent } from './component/smart-table-se-customer-s-to-a/edit-s-to-a/edit-s-to-a.componet';
import { SecondaryCustomerShipToAddressDetailEditComponent } from './component/smart-table-se-customer-s-to-a/edit-detail-s-to-a/edit-detail-s-to-a.component';
import { GeneralInformationEditComponent } from './component/smart-table-se-customer/general-information-dialog/general-information-dialog.component';
import { InvoicePaymentEditComponent } from './component/smart-table-se-customer/invoice-payment-dialog/invoice-payment-dialog.component';
import { OtherInformationEditComponent } from './component/smart-table-se-customer/other-information-dialog/other-information-dialog.component';
import { PropertiesEditComponent } from './component/smart-table-se-customer/properties-dialog/properties-dialog.component';
import { SecondaryCustomerDetailEditComponent } from './component/smart-table-se-customer/se-customer-detail/se-customer-detail.component';
import { SecondaryCustomerDetailComponent } from './component/smart-table-se-customer/se-customer-edit-detail/se-customer-edit-detial.component';

@NgModule({
    imports: [
        SecondaryCustomerRoutingModule,
        CommonModule,
        NbDialogModule.forChild(),
        CommonModule,
        FormsModule,
        ThemeModule,
        NbCardModule,
        NbButtonModule,
        NbTabsetModule,
        Ng2SmartTableModule,
        NbInputModule,
        ReactiveFormsModule,
        NbToggleModule,
        NbSelectModule,
        NbCheckboxModule,
        Ng2CompleterModule,
        StoreModule.forFeature(FeatureKey, reducer),
        EffectsModule.forFeature([SecondaryCustomerEffects, SecondaryCustomerShipToAddressEffects]),
    ],
    declarations: [
        SecondaryCustomerComponent,
        SecondaryCustomerListComponent,
        SmartTableSecondaryCustomerShipToAddressComponent,
        SmartTableSecondaryCustomerComponent,
        SecondaryCustomerAddComponent,
        SecondaryCustomerstoaAddComponent,
        SecondaryCustomerstoaEditDialogComponent,
        SecondaryCustomerShipToAddressDetailComponent,
        SecondaryCustomerShipToAddressDetailEditComponent,
        GeneralInformationEditComponent,
        InvoicePaymentEditComponent,
        OtherInformationEditComponent,
        PropertiesEditComponent,
        SecondaryCustomerDetailEditComponent,
        SecondaryCustomerDetailComponent,
    ],
    providers: [
    ],
    entryComponents: [
        SecondaryCustomerAddComponent,
        SecondaryCustomerstoaAddComponent,
        SecondaryCustomerstoaEditDialogComponent,
        GeneralInformationEditComponent,
        InvoicePaymentEditComponent,
        OtherInformationEditComponent,
        PropertiesEditComponent,
        SecondaryCustomerDetailEditComponent,
        SecondaryCustomerDetailComponent,
    ],
})
export class SecondaryCustomernModule { }
