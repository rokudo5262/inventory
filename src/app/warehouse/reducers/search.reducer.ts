import { createReducer, on } from '@ngrx/store';
import { searchInitialState } from '../states';
import { FindWarehouseActions, WarehousesApiActions } from '../actions';

export const searchFeatureKey = 'search';

export const reducer = createReducer(
    searchInitialState,
    on(FindWarehouseActions.searchWarehouses, (state, { query }) => ({
        ...state,
        loading: true,
    })),
    on(WarehousesApiActions.searchSuccess, (state, { warehouses }) => ({
        ids: warehouses.map(warehouse => warehouse.id),
        loading: false,
        error: '',
        query: state.query,
    }))
);
