import * as SecondaryCustomerReducer from './se-customer-list.reducers';
import * as SecondaryCustomerShipToAddressReducer from './se-customer-s-to-a.reducers';
import { SecondaryCustomerState, SecondaryCustomerShipToAddressState } from '../state';
import { Action, combineReducers } from '@ngrx/store';
export {
    SecondaryCustomerReducer,
    SecondaryCustomerShipToAddressReducer,
};

export const FeatureKey = 'secondarycustomers';
export interface State {
    [SecondaryCustomerReducer.secondarycustomersFeatureKey]: SecondaryCustomerState;
    [SecondaryCustomerShipToAddressReducer.secustomerstoasFeatureKey]: SecondaryCustomerShipToAddressState;
}
export function reducer(state: State | undefined, action: Action) {
    return combineReducers({
        [SecondaryCustomerShipToAddressReducer.secustomerstoasFeatureKey]:
            SecondaryCustomerShipToAddressReducer.reducer,
        [SecondaryCustomerReducer.secondarycustomersFeatureKey]:
            SecondaryCustomerReducer.reducer,
    })(state, action);
}
