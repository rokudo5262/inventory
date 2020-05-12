import * as ProductGroupReducer from './product-group.reducer';
import * as ProductGroupDetailReducer from './product-group-detail.reducer';
import { ProductGroupState, ProductGroupDetailState } from '../states';
import { combineReducers, Action } from '@ngrx/store';

export {
    ProductGroupReducer,
    ProductGroupDetailReducer,
};
export const FeatureKey = 'product-group';

export interface State {
    [ProductGroupReducer.ProductGroupFeatureKey]: ProductGroupState;
    [ProductGroupDetailReducer.ProductGroupDetailFeatureKey]: ProductGroupDetailState;
}
export function reducer(state: State | undefined, action: Action) {
    return combineReducers({
        [ProductGroupReducer.ProductGroupFeatureKey]: ProductGroupReducer.reducer,
        [ProductGroupDetailReducer.ProductGroupDetailFeatureKey]: ProductGroupDetailReducer.reducer,
    })(state, action);
}
