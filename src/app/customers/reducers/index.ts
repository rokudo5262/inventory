import * as CustomersReducer from './customer.reducer';
import { CustomerState } from '../states';
import { combineReducers, Action } from '@ngrx/store';

export {
    CustomersReducer,
};

export const FeatureKey = 'customers';

export interface State {
    [CustomersReducer.customersFeatureKey]: CustomerState;
}

export function reducer(states: State | undefined, action: Action) {
    return combineReducers({
        [CustomersReducer.customersFeatureKey]: CustomersReducer.reducer,
    })(states, action);
}
