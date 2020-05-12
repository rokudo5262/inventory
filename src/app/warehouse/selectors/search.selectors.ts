import { SearchState } from '../states';
import { selectWarehousesState } from './feature.selectors';
import { SearchReducer } from '../reducers';
import { createSelector } from '@ngrx/store';
import { selectWarehouseEntitiesState } from './warehouses.selectors';
import { Warehouse } from '@appdata';

/********** Local API *************/
export const getIds = (state: SearchState) => state.ids;
export const getQuery = (state: SearchState) => state.query;
export const getLoading = (state: SearchState) => state.loading;
export const getError = (state: SearchState) => state.error;

/********** Public API *************/
export const selectSearchWarehouseState = createSelector(
    selectWarehousesState,
    state => state[SearchReducer.searchFeatureKey],
);

export const selectSearchWarehouseIds = createSelector(
    selectSearchWarehouseState,
    getIds,
);

export const selectSearchWarehouseQuery = createSelector(
    selectSearchWarehouseState,
    getQuery,
);

export const selectSearchWarehouseLoading = createSelector(
    selectSearchWarehouseState,
    getLoading,
);

export const selectSearchWarehouseError = createSelector(
    selectSearchWarehouseState,
    getError,
);

export const selectSearchWarehouseResults = createSelector(
    selectWarehouseEntitiesState,
    selectSearchWarehouseIds,
    (warehouses, searchIds) => {
        return searchIds
            .map(id => warehouses.entities[id])
            .filter((warehouse): warehouse is Warehouse => warehouse != null);
    },
);

export const WarehouseSearchSelectors = {
    selectSearchWarehouseState,
    selectSearchWarehouseIds,
    selectSearchWarehouseQuery,
    selectSearchWarehouseLoading,
    selectSearchWarehouseError,
    selectSearchWarehouseResults
};
