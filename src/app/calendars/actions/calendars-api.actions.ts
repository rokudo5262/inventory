import { createAction, props } from '@ngrx/store';
import { Calendar } from '@app/@core/data/calendar';

/**
 * Add Calendar Actions
 */
export const addCalendarSuccess = createAction(
  '[Calendars/API] Add Calendar Success',
  props<{ calendar: Calendar }>(),
);
export const addCalendarFailure = createAction(
  '[Calendars/API] Add Calendar Failure',
  props<{ errorMsg: any }>(),
);
/**
 * Remove Calendar Actions
 */
export const removeCalendarSuccess = createAction(
  '[Calendars/API] Remove Calendar Success',
  props<{ id: number }>(),
);
export const removeCalendarFailure = createAction(
  '[Calendars/API] Remove Calendar Failure',
  props<{ errorMsg: any }>(),
);
/**
 * Update Calendar Actions
 */
export const updateCalendarSuccess = createAction(
  '[Calendars/API] Update Calendar Success',
  // props<{ location: ILocation }>(),
);
export const updateCalendarFailure = createAction(
  '[Calendars/API] Update Calendar Failure',
  props<{ errorMsg: any }>(),
);
/**
 * Load Calendar Actions
 */
export const loadCalendarsSuccess = createAction(
  '[Calendars/API] Load Calendars Success',
  props<{ calendars: Calendar[] }>(),
);
export const loadCalendarsFailure = createAction(
  '[Collection/API] Load Calendars Failure',
  props<{ errorMsg: any }>(),
);
