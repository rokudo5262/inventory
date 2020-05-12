import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocationsRoutingModule } from './locations-routing.module';
import { LocationsComponent } from './locations.component';
import { NbCardModule, NbInputModule, NbButtonModule } from '@nebular/theme';
import { ThemeModule } from '@app/@theme/theme.module';
import { CookieService } from 'ngx-cookie-service';
import { LocationDetailComponent } from '@app/locations/containers/location-detail/location-detail.component';
import { LocationListComponent } from '@app/locations/containers/location-list/location-list.component';
import { LocationAddComponent } from './containers/location-add/location-add.component';
import { StoreModule } from '@ngrx/store';
import { FeatureKey, reducer } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { LocationEffects } from './effects/location.effects';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  declarations: [
    LocationAddComponent,
    LocationDetailComponent,
    LocationListComponent,
    LocationsComponent,
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
  ],
})
export class LocationsModule { }
