import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocationsRoutingModule } from './locations-routing.module';
import { LocationsComponent } from './locations.component';
import { NbCardModule, NbInputModule, NbButtonModule } from '@nebular/theme';
import { ThemeModule } from '@app/@theme/theme.module';
import { CookieService } from 'ngx-cookie-service';
import { LocationDetailComponent } from '@app/locations/components/location-detail/location-detail.component';
import { LocationListComponent } from '@app/locations/components/location-list/location-list.component';
import { LocationAddComponent } from './components/location-add/location-add.component';
import { LocationPageComponent } from './containers/location-page/location-page.component';
import { StoreModule } from '@ngrx/store';
import { FeatureKey, reducer } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { LocationEffects } from './effects/location.effects';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { LocationPreviewComponent } from './components/location-preview/location-preview.component';
import { LocationUpdateComponent } from './components/location-update/location-update.component';

@NgModule({
  declarations: [
    LocationsComponent,
    LocationAddComponent,
    LocationDetailComponent,
    LocationListComponent,
    LocationPreviewComponent,
    LocationPageComponent,
    LocationUpdateComponent,
  ],
  imports: [
    CommonModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    ThemeModule,
    FormsModule,
    ReactiveFormsModule,
    LocationsRoutingModule,
    StoreModule.forFeature(FeatureKey, reducer),
    EffectsModule.forFeature([LocationEffects]),
    Ng2SmartTableModule,
  ],
  providers: [
    CookieService,
  ],
  entryComponents: [
    LocationAddComponent,
    LocationUpdateComponent,
  ],
})
export class LocationsModule { }
