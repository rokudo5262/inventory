import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Calendar } from '@app/@core/data/calendar';
import { CalendarSelectors } from '@app/calendars/selectors/calendar.selectors';
import { CalendarsActions } from '@app/calendars/actions';

@Component({
    selector: 'ngx-calendar-detail',
    templateUrl: './calendar-detail.component.html',
    styleUrls: ['./calendar-detail.component.scss'],
})

export class CalendarDetailComponent implements OnInit {
    calendar$;
    id$: number;
    constructor(
        private router: ActivatedRoute,
        private store: Store<Calendar>
    ) {
        this.id$ = +this.router.snapshot.params.id;
        this.calendar$ = this.store.pipe(select(CalendarSelectors.selectCurrentCalendar(this.id$)));
    }

    ngOnInit() {
        this.store.dispatch(CalendarsActions.getCalendars({ calendars: [] }));
    }
}
