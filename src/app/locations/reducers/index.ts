import * as LocationReducer from './location.reducers';
import { LocationState } from '../states';
import { combineReducers, Action } from '@ngrx/store';

export {
    LocationReducer,
};
export const FeatureKey = 'locations';

export interface State {
    [LocationReducer.locationsFeatureKey]: LocationState;
}
export function reducer(state: State | undefined, action: Action) {
    return combineReducers({
        [LocationReducer.locationsFeatureKey]: LocationReducer.reducer,
    })(state, action);
}
