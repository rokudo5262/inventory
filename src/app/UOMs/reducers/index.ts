import * as UomReducer from './uom.reducers';
import { UomState } from '../states';
import { Action, combineReducers } from '@ngrx/store';

export {
    UomReducer,
};

export const FeatureKey = 'uoms';

export interface State {
    [UomReducer.uomsFeatureKey]: UomState;
}

export function reducer(state: State | undefined, action: Action) {
    return combineReducers({
        [UomReducer.uomsFeatureKey]: UomReducer.reducer,
    })(state, action);
}
