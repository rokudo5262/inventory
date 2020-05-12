import { NgModule } from '@angular/core';
import { StoreInformationRoutingModule } from './store-infor-routing.module';
import { StoreInforListComponent } from './container/store-information/store-information.component';
import { StoreInformationComponent } from './store-infor.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FeatureKey, reducer } from './reducers';
import { StoreEffects } from './effects/store.effects';
import { RouterModule } from '@angular/router';
import { StoreInfor1Component } from './componet/store-infor/store-infor.component';
import { ThemeModule } from '@app/@theme/theme.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbCardModule, NbButtonModule, NbInputModule, NbDialogModule, NbTooltipModule, NbTabsetModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { StoreAddComponent } from './componet/smart-table-store/add-store/add-store.component';
import { SmartTableStoreComponent } from './componet/smart-table-store/smart-table-store.component';
import { CommonModule } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { StoreDetail1Component } from './container/store-detail/store-detail.component';
import { StoreDetailComponent } from './componet/store-detail/store-detail.component';

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
        StoreInforListComponent,
        StoreInformationComponent,
        StoreInfor1Component,
        StoreAddComponent,
        SmartTableStoreComponent,
        StoreDetail1Component,
        StoreDetailComponent
    ],
    providers: [
        CookieService,
    ],
    entryComponents: [
        StoreAddComponent,
        SmartTableStoreComponent,
    ],
})
export class StoreInformationModule { }
