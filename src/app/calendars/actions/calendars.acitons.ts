import { createAction, props } from '@ngrx/store';
import { Calendar } from '@app/@core/data/calendar';
import { Update } from '@ngrx/entity';

export const addCalendar = createAction(
  '[Calendars/API] Add Calendar',
  props<{ calendar: Calendar }>(),
);
export const updateCalendar = createAction(
  '[Calendars/API] Update Calendar',
  props<{ update: Update<Calendar> }>(),
);
export const removeCalendar = createAction(
  '[Calendars/API] Remove Calendar',
  props<{ id: number }>(),
);
export const getCalendars = createAction(
  '[Calendars/API] Load Calendars',
  props<{ calendars: Calendar[] }>(),
);
