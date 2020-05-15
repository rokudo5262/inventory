import { NgModule } from '@angular/core';
import { StoreInformationRoutingModule } from './store-information-routing.module';
import { StoreListComponent } from './containers/store-list/store-list.component';
import { StoreInformationComponent } from './store-information.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FeatureKey, reducer } from './reducers';
import { StoreEffects } from './effects/store.effects';
import { RouterModule } from '@angular/router';
import { ThemeModule } from '@app/@theme/theme.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    NbCardModule,
    NbButtonModule,
    NbInputModule,
    NbDialogModule,
    NbTooltipModule,
    NbTabsetModule
} from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { StoreAddComponent } from './components/store-add/store-add.component';
import { CommonModule } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { StorePreviewComponent } from './components/store-preview/store-preview.component';
import { StoreDetailComponent } from './components/store-detail/store-detail.component';
import { StoreSmartTableComponent } from './components/store-smart-table/store-smart-table.component';

@NgModule({
    imports: [
        StoreInformationRoutingModule,
        CommonModule,
        NbDialogModule.forChild(),
        ThemeModule,
        RouterModule,
        FormsModule,
        NbCardModule,
        NbInputModule,
        NbButtonModule,
        NbTooltipModule,
        Ng2SmartTableModule,
        NbTabsetModule,
        ReactiveFormsModule,
        StoreModule.forFeature(FeatureKey, reducer),
        EffectsModule.forFeature([StoreEffects])
    ],
    declarations: [
        StoreListComponent,
        StoreInformationComponent,
        StoreAddComponent,
        StoreSmartTableComponent,
        StorePreviewComponent,
        StoreDetailComponent,
    ],
    providers: [
        CookieService,
    ],
    entryComponents: [
        StoreAddComponent,
        StoreSmartTableComponent,
    ],
})
export class StoreInformationModule { }
