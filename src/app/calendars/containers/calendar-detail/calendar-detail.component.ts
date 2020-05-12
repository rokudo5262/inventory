import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Calendar } from '@app/@core/data/calendar';
import { CalendarSelectors } from '@app/calendars/selectors/calendar.selectors';
import { CalendarsApiActions } from '@app/calendars/actions';

@Component({
    template: `
    <nb-card>
        <nb-card-header>
            <h3>Calendar Details</h3>
        </nb-card-header>
        <nb-card-body>
            <ngx-calendar-detail [calendar]="calendar$ | async"></ngx-calendar-detail>
        </nb-card-body>
    </nb-card>
    `
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
        this.store.dispatch(CalendarsApiActions.getCalendars({ calendars: [] }));
    }
}
