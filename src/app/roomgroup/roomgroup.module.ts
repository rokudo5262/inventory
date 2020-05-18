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
    NbTooltipModule,
} from '@nebular/theme';
import { ThemeModule } from '../@theme/theme.module';
import { RoomGroupRoutingModule } from '@app/roomgroup/roomgroup-routing.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NbAuthModule } from '@nebular/auth';
import { EffectsModule } from '@ngrx/effects';
import { environment } from 'environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CookieService } from 'ngx-cookie-service';
import { RoomGroupComponent } from '@app/roomgroup/roomgroup.component';
import { RoomGroupEffects } from '@app/roomgroup/effects';
import { RoomGroupListComponent} from './components/roomgroup-list/roomgroup-list.component';
import { RoomGroupAddComponent } from './components/roomgroup-add/Roomgroup-add.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { RoomGroupPageComponent } from './containers/roomgroup-page/roomgroup-page.component';
import { StoreModule } from '@ngrx/store';
import { FeatureKey, reducer } from './reducers';
import { RoomGroupDetailComponent } from './components/roomgroup-detail/roomgroup-detail.component';
import { RoomGroupPreviewComponent } from './components/roomgroup-preview/roomgroup-preview.component';
import { RoomGroupUpdateComponent } from './components/roomgroup-update/roomgroup-update.component';
import { RoomGroupDeleteComponent } from './components/roomgroup-delete/roomgroup-delete.component';

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
        NbTooltipModule,
        // -------------------------------------------------------------
        ReactiveFormsModule,
        FormsModule,
        ThemeModule,
        RouterModule,
        RoomGroupRoutingModule,
        CommonModule,
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: environment.production
        }),
        StoreModule.forFeature(FeatureKey, reducer),
        EffectsModule.forFeature([RoomGroupEffects]),
        Ng2SmartTableModule,
    ],
    declarations: [
        RoomGroupPreviewComponent,
        RoomGroupDetailComponent,
        RoomGroupComponent,
        RoomGroupAddComponent,
        RoomGroupUpdateComponent,
        RoomGroupDeleteComponent,
        RoomGroupListComponent,
        RoomGroupPageComponent,
    ],
    entryComponents: [
        RoomGroupAddComponent,
        RoomGroupUpdateComponent,
        RoomGroupDeleteComponent,
    ],
    providers: [
        CookieService,
    ],
})
export class RoomGroupModule {
}
