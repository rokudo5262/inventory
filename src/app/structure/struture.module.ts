import { NgModule } from '@angular/core';
import { StructureRoutingModule } from './structure-routing.module';
import { StructureInformationComponent } from './container/structure/structure.component';
import { StructureComponent } from './structure.component';
import { SmartTableStructureComponent } from './component/smart-table-structure/smart-table-structure.component';
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
import { reducer, FeatureKey } from './reducer';
import { StructureEffects } from './effect/structure.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CookieService } from 'ngx-cookie-service';
import { StructureValueEffects } from './effect';
import {
    StructureAddComponent
} from './component/smart-table-structure/add-structure/add-structure.component';
import {
    SmartTableStructureValueComponent
} from './component/smart-table-structure-value/smart-table-structure-value.component';
import {
    StructureValueAddComponent
} from './component/smart-table-structure-value/add-structure-value/add-strucrure-value.component';
import {
    StructureValueInformationComponent
} from './container/structure-value/structure-value.component';
import {
    StructureDetailComponent
} from './component/smart-table-structure/structure-detail/structure-detail.component';
import {
    StructureDetailEditComponent
} from './component/smart-table-structure/structure-detail-edit/structure-detail-edit.componet';
import {
    Ng2CompleterModule
} from 'ng2-completer';
import {
    StructureValueDetailEditComponent
} from './component/smart-table-structure-value/structure-value-detail-edit/structure-value-detail-edit.componet';
import {
    StructureValueDetailComponent
} from './component/smart-table-structure-value/structure-value-detail/structure-value-detail.componet';
import {
    StructureValueEditDialogComponent
} from './component/smart-table-structure-value/edit-structure-value-dialog/edit-strucrure-value.component';

@NgModule({
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
        StoreModule.forFeature(FeatureKey, reducer),
        EffectsModule.forFeature([StructureEffects, StructureValueEffects]),
    ],
    declarations: [
        StructureComponent,
        StructureInformationComponent,
        SmartTableStructureComponent,
        StructureAddComponent,
        SmartTableStructureValueComponent,
        StructureValueAddComponent,
        StructureValueInformationComponent,
        StructureDetailComponent,
        StructureDetailEditComponent,
        StructureValueDetailEditComponent,
        StructureValueDetailComponent,
        StructureValueEditDialogComponent,
    ],
    providers: [
        CookieService,
    ],
    entryComponents: [
        StructureAddComponent,
        StructureValueAddComponent,
        StructureValueEditDialogComponent,
    ],
})
export class StructureModule { }
