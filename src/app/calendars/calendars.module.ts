import { NgModule } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { CommonModule } from '@angular/common';
import {
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    NbDatepickerModule,
    NbTooltipModule,
    NbCheckboxModule
} from '@nebular/theme';
import { ThemeModule } from '@app/@theme/theme.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { StoreModule } from '@ngrx/store';
import { FeatureKey, reducer } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { CalendarEffects } from './effects/calendar.effects';
import { CalendarsRoutingModule } from './calendars-routing.module';
import { CalendarsComponent } from './calendars.component';
import { CalendarAddComponent } from './containers/calendar-add/calendar-add.omponent';
import { CalendarViewComponent } from './containers/calendar-view/calendar-view.component';
import { CalendarDetailComponent } from './containers/calendar-detail/calendar-detail.component';
import { CalendarReviewComponent } from './components/calendar-review/calendar-review.component';

@NgModule({
    declarations: [
        CalendarsComponent,
        CalendarAddComponent,
        CalendarViewComponent,
        CalendarDetailComponent,
        CalendarReviewComponent,
    ],
    imports: [
        NbCheckboxModule,
        NbTooltipModule,
        CommonModule,
        NbCardModule,
        NbInputModule,
        NbButtonModule,
        ThemeModule,
        FormsModule,
        ReactiveFormsModule,
        NbDatepickerModule,
        Ng2SmartTableModule,
        CalendarsRoutingModule,
        StoreModule.forFeature(FeatureKey, reducer),
        EffectsModule.forFeature([CalendarEffects]),
    ],
    providers: [
        CookieService,
    ],
    entryComponents: [
        CalendarAddComponent,
    ]
})
export class CalendarsModule { }
