import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { CalendarsApiActions, CalendarCollectionApiActions } from '../actions';
import { mergeMap, map, catchError, switchMap } from 'rxjs/operators';
import { Calendar } from '@app/@core/data/calendar';
import { of, empty } from 'rxjs';
import { CalendarsService } from '../services/calendars.service';

@Injectable()
export class CalendarEffects {
    calendars$ = createEffect(() => this.action$.pipe(
        ofType(CalendarsApiActions.getCalendars),
        mergeMap(() => this.calendarService.getCalendars().pipe(
            map((items: Calendar[]) => CalendarCollectionApiActions
                .loadCalendarsSuccess({ calendars: items })),
            catchError(error => of(CalendarCollectionApiActions
                .loadCalendarsFailure({ errorMsg: error.message })))
        ))
    ));
    create$ = createEffect(() => this.action$.pipe(
        ofType(CalendarsApiActions.addCalendar),
        switchMap(({ calendar }) => this.calendarService.addCalendar(calendar).pipe(
            map((item: Calendar) => CalendarCollectionApiActions
                .addCalendarSuccess({ calendar: item })),
            catchError(error => of(CalendarCollectionApiActions
                .addCalendarFailure({ errorMsg: error.message })))
        ))
    ));
    update$ = createEffect(() => this.action$.pipe(
        ofType(CalendarsApiActions.updateCalendar),
        switchMap(({ update }) => this.calendarService.updateCalendar(update.changes).pipe(
            map(item => CalendarCollectionApiActions
                .updateCalendarSuccess()),
            catchError(error => of(CalendarCollectionApiActions
                .updateCalendarFailure({ errorMsg: error.message })))
        ))
    ));
    remove$ = createEffect(() => this.action$.pipe(
        ofType(CalendarsApiActions.removeCalendar),
        switchMap(({ id }) => {
            if (id <= 0) {
                return empty;
            }
            return this.calendarService.removeCalendar(id).pipe(
                map((item: Calendar) => CalendarCollectionApiActions
                    .removeCalendarSuccess({ id: item ? item.id : 0 })),
                catchError(error => of(CalendarCollectionApiActions
                    .removeCalendarFailure({ errorMsg: error.message })))
            );
        })
    ));
    constructor(
        private action$: Actions,
        private calendarService: CalendarsService,
    ) { }
}
