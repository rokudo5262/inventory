import { NgModule } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { CommonModule } from '@angular/common';
import {
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    NbTooltipModule
} from '@nebular/theme';
import { ThemeModule } from '@app/@theme/theme.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UomsRoutingModule } from './uoms-routing.module';
import { UomsComponent } from './uoms.component';
import { UomEffects } from './effects/uom.effects';
import { UomAddComponent } from './containers/UOM-add/uom-add.component';
import { UomListComponent } from './containers/UOM-list/uom-list.component';
import { UomDetailComponent } from './containers/UOM-detail/uom-detail.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FeatureKey, reducer } from './reducers';
import { UomReviewComponent } from './components/uom-review/uom-review.component';

@NgModule({
    declarations: [
        UomsComponent,
        UomAddComponent,
        UomListComponent,
        UomDetailComponent,
        UomReviewComponent,
    ],
    imports: [
        NbTooltipModule,
        CommonModule,
        NbCardModule,
        NbInputModule,
        NbButtonModule,
        ThemeModule,
        FormsModule,
        ReactiveFormsModule,
        Ng2SmartTableModule,
        UomsRoutingModule,
        StoreModule.forFeature(FeatureKey, reducer),
        EffectsModule.forFeature([UomEffects]),
    ],
    providers: [
        CookieService,
    ],
    entryComponents: [
        UomAddComponent,
    ],
})
export class UomsModule { }
