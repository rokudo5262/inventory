import * as ApplyForHeaderReducer from './af-header.reducers';
import * as ApplyForCustomerReducer from './af-customer.reducers';
import * as ApplyForSecondaryCustomerReducer from './af-secondary.reducers';
import {
    ApplyForHeaderState,
    ApplyForCustomerState,
    ApplyForSecondaryCustomerState
} from '../states';
import { Action, combineReducers } from '@ngrx/store';

export {
    ApplyForHeaderReducer,
    ApplyForCustomerReducer,
    ApplyForSecondaryCustomerReducer,
};
export const FeatureKey = 'applyFors';

export interface State {
    [ApplyForHeaderReducer.applyForHeadersFeatureKey]:
    ApplyForHeaderState;
    [ApplyForCustomerReducer.applyForCustomersFeatureKey]:
    ApplyForCustomerState;
    [ApplyForSecondaryCustomerReducer.applyForSecondaryCustomersFeatureKey]:
    ApplyForSecondaryCustomerState;
}

export function reducer(state: State | undefined, action: Action) {
    return combineReducers({
        [ApplyForHeaderReducer.applyForHeadersFeatureKey]:
            ApplyForHeaderReducer.reducer,
        [ApplyForCustomerReducer.applyForCustomersFeatureKey]:
            ApplyForCustomerReducer.reducer,
        [ApplyForSecondaryCustomerReducer.applyForSecondaryCustomersFeatureKey]:
            ApplyForSecondaryCustomerReducer.reducer,
    })(state, action);
}
