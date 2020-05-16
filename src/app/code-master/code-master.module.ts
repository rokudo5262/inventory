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
    NbCheckboxModule
} from '@nebular/theme';
import { ThemeModule } from '@app/@theme/theme.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CodeMasterPageComponent } from './containers/code-master-page/code-master-page.component';
import { CodeMasterRoutingModule } from './code-master-routing.module';
import { CodeMasterComponent } from './code-master.component';
import { StoreModule } from '@ngrx/store';
import { FeatureKey, reducer } from '@appcodeMaster/reducers';
import { CodeMasterEffects, CodeDetailEffects } from './effects';
import { EffectsModule } from '@ngrx/effects';
import { CodeMasterListComponent } from './components/code-master-list/code-master-list.component';
import { CodeDetailListComponent } from './components/code-detail-list/code-detail-list.component';
import { CodeDetailPageComponent } from './containers/code-detail-page/code-detail-page.component';
import { Ng2CompleterModule } from 'ng2-completer';
import { CodeMasterDetailComponent } from './components/code-master-detail/code-master-detail.component';
import { CodeMasterAddComponent } from './components/code-master-add/code-master-add.component';
import { CodeDetailAddComponent } from './components/code-detail-add/code-detail-add.component';
import { CodeMasterSelectComponent } from './components/code-master-select/code-master-select.component';
import { CodeDetailDetailComponent } from './components/code-detail-detail/code-detail-detail.component';

@NgModule({
    imports: [
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
        CodeMasterRoutingModule,
        Ng2CompleterModule,
        StoreModule.forFeature(FeatureKey, reducer),
        EffectsModule.forFeature([CodeMasterEffects, CodeDetailEffects]),
    ],
    declarations: [
        CodeMasterComponent,
        CodeMasterPageComponent,
        CodeMasterAddComponent,
        CodeMasterListComponent,
        CodeMasterDetailComponent,
        CodeMasterSelectComponent,
        CodeDetailPageComponent,
        CodeDetailAddComponent,
        CodeDetailListComponent,
        CodeDetailDetailComponent,
    ],
    entryComponents: [
        CodeMasterAddComponent,
        CodeDetailAddComponent,
    ],
})
export class CodeMasterModule { }
