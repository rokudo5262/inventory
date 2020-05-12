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
import { CodeMasterPageComponent } from './containers/code-master-page.component';
import { CodeMasterRoutingModule } from './code-master-routing.module';
import { CodeMasterComponent } from './code-master.component';
import { StoreModule } from '@ngrx/store';
import { FeatureKey, reducer } from '@appcodeMaster/reducers';
import { CodeMasterEffects, CodeDetailEffects } from './effects';
import { EffectsModule } from '@ngrx/effects';
import { CodeMasterListComponent } from './containers/code-master/cm-list.component';
import { CodeDetailListComponent } from './containers/code-detail/cd-list.component';
import { CodeMasterNewComponent } from './containers/code-master/new-cm/cm-new.component';
import { CodeDetailPageComponent } from './containers/code-detail/code-detail-page.component';
import { CodeDetailNewComponent } from './containers/code-detail/new-cd/cd-new.component';
import { DetailComponent } from './containers/code-master/detail/detail.component';
import { ButtonViewComponent } from './components/code-master/button.component';
import { SystemCheckboxComponent } from './components/code-master/system-checkbox.component';
import { Ng2CompleterModule } from 'ng2-completer';

export const CONTAINERS = [
    CodeMasterPageComponent,
    CodeMasterListComponent,
    CodeDetailListComponent,
    CodeMasterNewComponent,
    CodeDetailPageComponent,
    CodeDetailNewComponent,
    DetailComponent,

];
export const COMPONENTS = [
    ButtonViewComponent,
    SystemCheckboxComponent,
    // CmDetailComponent,
    CodeMasterComponent,
];
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
    declarations: [CONTAINERS, COMPONENTS],
    entryComponents: [CodeMasterNewComponent,
        CodeDetailNewComponent,
        ButtonViewComponent,
        SystemCheckboxComponent,
    ],
})
export class CodeMasterModule { }
