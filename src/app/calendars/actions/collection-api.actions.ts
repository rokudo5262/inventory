import { createAction, props } from '@ngrx/store';
import { Calendar } from '@app/@core/data/calendar';

/**
 * Add Calendar to Collection Actions
 */
export const addCalendarSuccess = createAction(
  '[Collection/API] Add Calendar Success',
  props<{ calendar: Calendar }>(),
);
export const addCalendarFailure = createAction(
  '[Collection/API] Add Calendar Failure',
  props<{ errorMsg: any }>(),
);
/**
 * Remove Calendar from Collection Actions
 */
export const removeCalendarSuccess = createAction(
  '[Collection/API] Remove Calendar Success',
  props<{ id: number }>(),
);
export const removeCalendarFailure = createAction(
  '[Collection/API] Remove Calendar Failure',
  props<{ errorMsg: any }>(),
);
/**
 * Update Calendar from Collection Actions
 */
export const updateCalendarSuccess = createAction(
  '[Collection/API] Update Calendar Success',
  // props<{ location: ILocation }>(),
);
export const updateCalendarFailure = createAction(
  '[Collection/API] Update Calendar Failure',
  props<{ errorMsg: any }>(),
);
/**
 * Load Collection Actions
 */
export const loadCalendarsSuccess = createAction(
  '[Collection/API] Load Calendars Success',
  props<{ calendars: Calendar[] }>(),
);
export const loadCalendarsFailure = createAction(
  '[Collection/API] Load Calendars Failure',
  props<{ errorMsg: any }>(),
);
