import * as WarehouseListReducer from './warehouses-list.reducer';
import * as WarehouseReducer from './warehouses.reducer';
import * as SearchReducer from './search.reducer';
import { WarehouseState, WarehouseListState, SearchState} from '../states';
import { Action, combineReducers } from '@ngrx/store';

export {
    WarehouseReducer,
    WarehouseListReducer,
    SearchReducer,
};

export const FeatureKey = 'warehouses';

export interface State {
    [WarehouseReducer.warehousesFeatureKey]: WarehouseState;
    [WarehouseListReducer.warehouseListFeatureKey]: WarehouseListState;
    [SearchReducer.searchFeatureKey]: SearchState;
}

export function reducer(state: State | undefined, action: Action) {
    return combineReducers({
        [WarehouseReducer.warehousesFeatureKey]: WarehouseReducer.reducer,
        [WarehouseListReducer.warehouseListFeatureKey]: WarehouseListReducer.reducer,
        [SearchReducer.searchFeatureKey]: SearchReducer.reducer,
    })(state, action);
}
