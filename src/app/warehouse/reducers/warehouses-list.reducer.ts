import { createReducer, on } from '@ngrx/store';
import { warehouseListInitialState } from '../states';
import { WarehouseListActions, WarehouseListApiActions } from '../actions';

export const warehouseListFeatureKey = 'warehouseList';

export const reducer = createReducer(
    warehouseListInitialState,
    on(WarehouseListActions.loadWarehouseList, state => ({
        ...state,
        loading: true,
    })),
    on(WarehouseListApiActions.loadWarehousesSuccess, (state, { warehouses }) => ({
        loaded: true,
        loading: false,
        ids: warehouses.map(warehouse => warehouse.id),
    })),
);
