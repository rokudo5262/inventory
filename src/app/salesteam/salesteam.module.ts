import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    NbButtonModule,
    NbCardModule,
    NbInputModule,
    NbWindowModule,
    NbDialogModule,
    NbTreeGridModule,
    NbThemeModule,
    NbListModule,
    NbSpinnerModule,
    NbTabsetModule,
    NbSelectModule,
} from '@nebular/theme';
import { ThemeModule } from '../@theme/theme.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NbAuthModule } from '@nebular/auth';
import { EffectsModule } from '@ngrx/effects';
import { environment } from 'environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CookieService } from 'ngx-cookie-service';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { StoreModule } from '@ngrx/store';
import { SalesTeamEffect, SalesTeamBinEffect } from './effects';
import { SalesTeamComponent } from './salesteam.component';
import { SalesTeamRoutingModule } from './salesteam-routing.module';
import { SalesTeamDetailComponent } from './components/salesteam-detail/salesteam-detail.component';
import { SalesTeamPreviewComponent } from './components/salesteam-preview/salesteam-preview.component';
import { SalesTeamAddComponent } from './components/salesteam-add/salesteam-add.component';
import { SalesTeamListComponent } from './components/salesteam-list/salesteam-list.component';
import { SalesTeamUpdateComponent } from './components/salesteam-update/salesteam-update.component';
import { SalesTeamDeleteComponent } from './components/salesteam-delete/salesteam-delete.component';
import { SalesTeamPageComponent } from './containers/salesteam-page/salesteam-page.component';
import { SalesTeamBinPreviewComponent } from './components/salesteambin-preview/salesteambin-preview.component';
import { SalesTeamBinDetailComponent } from './components/salesteambin-detail/salesteambin-detail.component';
import { SalesTeamBinAddComponent } from './components/salesteambin-add/salesteambin-add.component';
import { SalesTeamBinUpdateComponent } from './components/salesteambin-update/salesteambin-update.component';
import { SalesTeamBinDeleteComponent } from './components/salesteambin-delete/salesteambin-delete.component';
import { SalesTeamBinListComponent } from './components/salesteambin-list/salesteambin-list.component';
import { SalesTeamBinPageComponent } from './containers/salesteambin-page/salesteambin-page.component';
import { BinDetailComponent } from './components/bin-detail/bin-detail.component';
import {
    FeatureKey_SalesTeam,
    reducer_salesteam,
    FeatureKey_SalesTeamBin,
    reducer_salesteambin
} from './reducers';
import { BinDetail2Component } from './components/bin-detail-2/bin-detail-2.component';

@NgModule({
    imports: [
        NbTreeGridModule,
        NbAuthModule,
        NbDialogModule.forChild(),
        NbThemeModule,
        NbButtonModule,
        NbCardModule,
        NbInputModule,
        NbWindowModule,
        NbListModule,
        NbSpinnerModule,
        NbTabsetModule,
        NbSelectModule,
        // -------------------------------------------------------------
        ReactiveFormsModule,
        FormsModule,
        ThemeModule,
        RouterModule,
        SalesTeamRoutingModule,
        CommonModule,
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: environment.production
        }),
        StoreModule.forFeature(FeatureKey_SalesTeam, reducer_salesteam),
        StoreModule.forFeature(FeatureKey_SalesTeamBin, reducer_salesteambin),
        EffectsModule.forFeature([SalesTeamEffect, SalesTeamBinEffect]),
        Ng2SmartTableModule,
    ],
    declarations: [
        // -------------------------------------------------------------
        SalesTeamPreviewComponent,
        SalesTeamDetailComponent,
        SalesTeamComponent,
        SalesTeamAddComponent,
        SalesTeamUpdateComponent,
        SalesTeamListComponent,
        SalesTeamPageComponent,
        SalesTeamDeleteComponent,
        // -------------------------------------------------------------
        BinDetailComponent,
        BinDetail2Component,
        SalesTeamBinPreviewComponent,
        SalesTeamBinDetailComponent,
        SalesTeamBinAddComponent,
        SalesTeamBinUpdateComponent,
        SalesTeamBinDeleteComponent,
        SalesTeamBinListComponent,
        SalesTeamBinPageComponent,
    ],
    entryComponents: [
        // -------------------------------------------------------------
        SalesTeamAddComponent,
        SalesTeamUpdateComponent,
        SalesTeamDeleteComponent,
        // -------------------------------------------------------------
        SalesTeamBinAddComponent,
        SalesTeamBinUpdateComponent,
        SalesTeamBinDeleteComponent,
    ],
    providers: [
        CookieService,
    ],
})
export class SalesTeamModule {
}
