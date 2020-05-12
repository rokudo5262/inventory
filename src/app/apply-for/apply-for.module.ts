import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    NbTabsetModule,
    NbToggleModule,
    NbSelectModule,
    NbCheckboxModule,
    NbDialogModule
} from '@nebular/theme';
import { ThemeModule } from '@app/@theme/theme.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { StoreModule } from '@ngrx/store';
import { FeatureKey, reducer } from '@appapplyfor/reducers';
import { EffectsModule } from '@ngrx/effects';
import { Ng2CompleterModule } from 'ng2-completer';
import { ApplyForRoutingModule } from './apply-for-routing.module';
import { ApplyForComponent } from './apply-for.component';
import { ApplyForHeaderPageComponent } from './containers/apply-for-page.component';
import { ApplyHeaderNewComponent } from './containers/apply-for-header/new/af-header-new.component';
import { ApplyForHeaderEffects } from './effects/af-header.effects';
import { HeaderDetailComponent } from './components/apply-for-header/header-detail.component';
import { DetailComponent } from './containers/apply-for-header/detail/af-header.component';
import { ApplyForCustomerEffects, ApplyForSecondaryCustomerEffects } from './effects';
import { ApplyCustomerNewComponent } from './containers/apply-for-customer/new/af-customer-new.component';
import { ApplyForCustomerPageComponent } from './containers/apply-for-customer/apply-for-customer.component';
import { CustomerDComponent } from './components/apply-for-customer/customer-detail.component';
import { CustomerDetailComponent } from './containers/apply-for-customer/detail/af-customer.component';
import { ExclusiveCheckboxComponent } from './components/apply-for-customer/exclusive-checkbox.component';
import { ApplyForSecondaryCustomerPageComponent } from './containers/apply-for-secondary/apply-for-secondary.component';
import { ApplySecondaryNewComponent } from './containers/apply-for-secondary/new/af-secondary-new.component';
import { SecondaryCustomerDComponent } from './components/apply-for-secondary/secondary-detail.component';
import { SecondaryDetailComponent } from './containers/apply-for-secondary/detail/af-secondary.component';

export const CONTAINERS = [
    ApplyForHeaderPageComponent,
    ApplyHeaderNewComponent,
    DetailComponent,
    ApplyCustomerNewComponent,
    ApplyForCustomerPageComponent,
    CustomerDetailComponent,
    ApplyForSecondaryCustomerPageComponent,
    ApplySecondaryNewComponent,
    SecondaryDetailComponent,
];
export const COMPONENTS = [
    ApplyForComponent,
    HeaderDetailComponent,
    CustomerDComponent,
    ExclusiveCheckboxComponent,
    SecondaryCustomerDComponent,
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ThemeModule,
        NbDialogModule.forRoot(),
        NbCardModule,
        NbButtonModule,
        NbTabsetModule,
        Ng2SmartTableModule,
        NbInputModule,
        ReactiveFormsModule,
        NbToggleModule,
        NbSelectModule,
        NbCheckboxModule,
        ApplyForRoutingModule,
        Ng2CompleterModule,
        StoreModule.forFeature(FeatureKey, reducer),
        EffectsModule.forFeature([ApplyForHeaderEffects, ApplyForCustomerEffects, ApplyForSecondaryCustomerEffects]),
    ],
    declarations: [CONTAINERS, COMPONENTS],
    entryComponents: [ApplyHeaderNewComponent,
        ApplyCustomerNewComponent,
        ExclusiveCheckboxComponent,
        ApplySecondaryNewComponent,
    ],
})
export class ApplyForModule { }
