import * as StoreReducer from './store.reducers';
import { StoreState } from '../states';
import { combineReducers, Action } from '@ngrx/store';

export {
    StoreReducer,
};
export const FeatureKey = 'stores';
export interface State {
    [StoreReducer.storesFeatureKey]: StoreState;
}
export function reducer(state: State | undefined, action: Action) {
    return combineReducers({
        [StoreReducer.storesFeatureKey]: StoreReducer.reducer,
    })(state, action);
}
