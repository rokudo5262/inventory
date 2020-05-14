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
import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarComponent } from './calendar.component';
import { CalendarPageComponent } from './containers/calendar-page/calendar-page.component';
import { CalendarAddComponent } from './components/calendar-add/calendar-add.component';
import { CalendarViewComponent } from './components/calendar-view/calendar-view.component';
import { CalendarDetailComponent } from './components/calendar-detail/calendar-detail.component';
import { CalendarReviewComponent } from './components/calendar-review/calendar-review.component';

@NgModule({
    declarations: [
        CalendarComponent,
        CalendarPageComponent,
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
        CalendarRoutingModule,
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
export class CalendarModule { }
