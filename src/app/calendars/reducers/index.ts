import * as CalendarReducer from './calendar.reducers';
import { CalendarState } from '../states';
import { Action, combineReducers } from '@ngrx/store';

export {
    CalendarReducer,
};

export const FeatureKey = 'calendars';

export interface State {
    [CalendarReducer.calendarsFeatureKey]: CalendarState;
}

export function reducer(state: State | undefined, action: Action) {
    return combineReducers({
        [CalendarReducer.calendarsFeatureKey]: CalendarReducer.reducer,
    })(state, action);
}
