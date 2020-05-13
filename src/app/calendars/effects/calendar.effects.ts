import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { mergeMap, map, catchError, switchMap } from 'rxjs/operators';
import { Calendar } from '@app/@core/data/calendar';
import { of, empty } from 'rxjs';
import { CalendarsService } from '../services/calendars.service';
import { CalendarsActions, CalendarsApiActions } from '../actions';

@Injectable()
export class CalendarEffects {
    calendars$ = createEffect(() => this.action$.pipe(
        ofType(CalendarsActions.getCalendars),
        mergeMap(() => this.calendarService.getCalendars().pipe(
            map((items: Calendar[]) => CalendarsApiActions
                .loadCalendarsSuccess({ calendars: items })),
            catchError(error => of(CalendarsApiActions
                .loadCalendarsFailure({ errorMsg: error.message })))
        ))
    ));
    create$ = createEffect(() => this.action$.pipe(
        ofType(CalendarsActions.addCalendar),
        switchMap(({ calendar }) => this.calendarService.addCalendar(calendar).pipe(
            map((item: Calendar) => CalendarsApiActions
                .addCalendarSuccess({ calendar: item })),
            catchError(error => of(CalendarsApiActions
                .addCalendarFailure({ errorMsg: error.message })))
        ))
    ));
    update$ = createEffect(() => this.action$.pipe(
        ofType(CalendarsActions.updateCalendar),
        switchMap(({ update }) => this.calendarService.updateCalendar(update.changes).pipe(
            map(item => CalendarsApiActions
                .updateCalendarSuccess()),
            catchError(error => of(CalendarsApiActions
                .updateCalendarFailure({ errorMsg: error.message })))
        ))
    ));
    remove$ = createEffect(() => this.action$.pipe(
        ofType(CalendarsActions.removeCalendar),
        switchMap(({ id }) => {
            if (id <= 0) {
                return empty;
            }
            return this.calendarService.removeCalendar(id).pipe(
                map((item: Calendar) => CalendarsApiActions
                    .removeCalendarSuccess({ id: item ? item.id : 0 })),
                catchError(error => of(CalendarsApiActions
                    .removeCalendarFailure({ errorMsg: error.message })))
            );
        })
    ));
    constructor(
        private action$: Actions,
        private calendarService: CalendarsService,
    ) { }
}
