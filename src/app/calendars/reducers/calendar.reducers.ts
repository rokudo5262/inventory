import { createReducer, on } from '@ngrx/store';
import { CalendarsApiActions, CalendarCollectionApiActions } from '../actions';
import { calendarInitialState, calendarAdapter } from '../states';

export const calendarsFeatureKey = 'calendars';

export const reducer = createReducer(
    calendarInitialState,
    on(
        CalendarsApiActions.getCalendars,
        CalendarCollectionApiActions.loadCalendarsSuccess,
        (state, { calendars }) => {
            calendars = calendars;
            return calendarAdapter.addMany(calendars, state);
        }
    ),
    on(
        CalendarsApiActions.addCalendar,
        CalendarCollectionApiActions.addCalendarSuccess,
        (state, { calendar }) => calendarAdapter.addOne(calendar, state)
    ),
    on(
        CalendarsApiActions.updateCalendar,
        (state, { update }) => calendarAdapter.updateOne(update, state)
    ),
    on(
        CalendarsApiActions.removeCalendar,
        CalendarCollectionApiActions.removeCalendarSuccess,
        (state, { id }) => calendarAdapter.removeOne(id, state)
    ),
);
