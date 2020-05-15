import { NgModule } from '@angular/core';
import { StructureRoutingModule } from './structure-routing.module';
import { StructureComponent } from './structure.component';
import { CommonModule } from '@angular/common';
import {
    NbDialogModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    NbTabsetModule,
    NbSelectModule,
    NbCheckboxModule,
    NbToggleModule
} from '@nebular/theme';
import { ThemeModule } from '@app/@theme/theme.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { reducer, FeatureKey } from './reducers';
import { StructureEffects } from './effects/structure.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CookieService } from 'ngx-cookie-service';
import { StructureValueEffects } from './effects';
import { Ng2CompleterModule } from 'ng2-completer';
import { StructurePageComponent } from './containers/structure-page/structure-page.component';
import { StructureAddComponent } from './components/structure-add/structure-add.component';
import { StructureValuePageComponent } from './containers/structure-value-page/structure-value-page.component';
import { StructureDetailComponent } from './components/structure-detail/structure-detail.component';
import { StructureValueEditComponent } from './components/structure-value-edit/structure-value-edit.component';
import { StructureValueDetailComponent } from './components/structure-value-detail/structure-value-detail.component';
import { StructureValueSmartTableComponent } from './components/structure-value-smart-table/structure-value-smart-table.component';
import { StructureEditComponent } from './components/structure-edit/structure-edit.component';
import { StructureSmartTableComponent } from './components/structure-smart-table/structure-smart-table.component';
import { StructureValueDialogComponent } from './components/structure-value-dialog/structure-value-dialog.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'environments/environment';
import { StructureValueAddComponent } from './components/structure-value-add/structure-value-add.component';

@NgModule({
    declarations: [
        // ================================
        StructureComponent,
        StructurePageComponent,
        StructureSmartTableComponent,
        StructureAddComponent,
        StructureDetailComponent,
        StructureEditComponent,
        // ================================
        StructureValuePageComponent,
        StructureValueSmartTableComponent,
        StructureValueAddComponent,
        StructureValueEditComponent,
        StructureValueDetailComponent,
        StructureValueDialogComponent,
        // ================================
    ],
    imports: [
        StructureRoutingModule,
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
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: environment.production
        }),
        StoreModule.forFeature(FeatureKey, reducer),
        EffectsModule.forFeature([StructureEffects, StructureValueEffects]),
    ],
    providers: [
        CookieService,
    ],
    entryComponents: [
        StructureAddComponent,
        StructureValueAddComponent,
        StructureValueDialogComponent,
    ],
})
export class StructureModule { }
