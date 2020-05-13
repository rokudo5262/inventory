import { createReducer, on } from '@ngrx/store';
import { CalendarsApiActions, CalendarsActions } from '../actions';
import { calendarInitialState, calendarAdapter } from '../states';

export const calendarsFeatureKey = 'calendars';

export const reducer = createReducer(
    calendarInitialState,
    on(
        CalendarsActions.getCalendars,
        CalendarsApiActions.loadCalendarsSuccess,
        (state, { calendars }) => {
            calendars = calendars;
            return calendarAdapter.addMany(calendars, state);
        }
    ),
    on(
        CalendarsActions.addCalendar,
        CalendarsApiActions.addCalendarSuccess,
        (state, { calendar }) => calendarAdapter.addOne(calendar, state)
    ),
    on(
        CalendarsActions.updateCalendar,
        (state, { update }) => calendarAdapter.updateOne(update, state)
    ),
    on(
        CalendarsActions.removeCalendar,
        CalendarsApiActions.removeCalendarSuccess,
        (state, { id }) => calendarAdapter.removeOne(id, state)
    ),
);
