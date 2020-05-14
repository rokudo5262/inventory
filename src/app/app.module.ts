/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
  NbDialogService,
} from '@nebular/theme';
import { StoreModule } from '@ngrx/store';
import { ROOT_REDUCERS, metaReducers } from '@app/reducers';
import { BooksModule } from '@appbooks/books.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'environments/environment';
import { WarehouseModule } from './warehouse';
import { CustomersModule } from './customers';
import { LocationsModule } from './locations';
import { RoomGroupModule } from './roomgroup';
import { StoreInformationModule } from './store-information/store-information.module';
import { UomsModule } from './UOMs';
import { SalesTeamModule } from './salesteam/salesteam.module';
import { ProductGroupModule } from './product-group';
import { CodeMasterModule } from './code-master';
import { CalendarModule } from './calendars/calendar.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ThemeModule.forRoot(),
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }),
    HttpClientModule,
    /**
    * StoreModule.forRoot is imported once in the root module, accepting a reducer
    * function or object map of reducer functions. If passed an object of
    * reducers, combineReducers will be run creating your application
    * meta-reducer. This returns all providers for an @ngrx/store
    * based application.
    */
    StoreModule.forRoot(ROOT_REDUCERS, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: true,
      },
    }),
    /**
    * @ngrx/router-store keeps router state up-to-date in the store.
    */
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    BooksModule,
    CustomersModule,
    StoreInformationModule,
    WarehouseModule,
    RoomGroupModule,
    SalesTeamModule,
    CoreModule.forRoot(),
    LocationsModule,
    UomsModule,
    ProductGroupModule,
    CodeMasterModule,
    CalendarModule,
  ],
  providers: [
    NbDialogService,
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {
}
