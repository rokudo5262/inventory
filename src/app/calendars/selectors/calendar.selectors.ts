import { createSelector } from '@ngrx/store';
import { selectCalendarsState } from './features.selectors';
import { CalendarReducer } from '../reducers';
import { calendarAdapter } from '../states';

export const selectCalendarEntitiesState = createSelector(
    selectCalendarsState,
    state => state[CalendarReducer.calendarsFeatureKey],
);

export const {
    selectIds: selectCalendarIds,
    selectEntities: selectCalendarEntities,
    selectAll: selectAllCalendars,
    selectTotal: selectTotalCalendars
} = calendarAdapter.getSelectors(selectCalendarEntitiesState);

export const selectCurrentCalendar = (id) => createSelector(
    selectCalendarEntities,
    (calendars) => calendars[id],
);
export const CalendarSelectors = {
    selectCalendarEntitiesState,
    selectCalendarIds,
    selectCalendarEntities,
    selectAllCalendars,
    selectTotalCalendars,
    selectCurrentCalendar,
};
