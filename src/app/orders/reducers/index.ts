import * as OrdersReducer from './orders.reducer';
import { combineReducers, Action } from '@ngrx/store';
import { OrdersState } from '../states/orders.state';

export {
    OrdersReducer,
};
export const FeatureKey = 'orders';

export interface State {
    [OrdersReducer.ordersFeatureKey]: OrdersState;
}

export function reducer(state: State | undefined, action: Action) {
    return combineReducers({
        [OrdersReducer.ordersFeatureKey]: OrdersReducer.reducer,
    })(state, action);
}
