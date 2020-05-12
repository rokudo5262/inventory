import { createSelector } from '@ngrx/store';

import { WarehouseListState } from '../states';
import { WarehouseListReducer } from '../reducers';
import { Warehouse } from '@appdata';
import { selectWarehousesState } from './feature.selectors';
import { WarehouseSelectors } from './warehouses.selectors';
/********** Local API *************/
export const getLoaded = (state: WarehouseListState) => state.loaded;

export const getLoading = (state: WarehouseListState) => state.loading;

export const getIds = (state: WarehouseListState) => state.ids;

/********** Public API *************/
export const selectWarehouseListState = createSelector(
  selectWarehousesState,
  state => state[WarehouseListReducer.warehouseListFeatureKey],
);

export const selectWarehouseListLoaded = createSelector(
  selectWarehouseListState,
  getLoaded,
);

export const selectWarehouseListLoading = createSelector(
  selectWarehouseListState,
  getLoading,
);

export const selectWarehouseListIds = createSelector(
  selectWarehouseListState,
  getIds,
);

export const selectWarehouseList = createSelector(
  WarehouseSelectors.selectWarehouseEntities,
  selectWarehouseListIds,
  (entities, ids) => {
    return ids
      .map(id => entities[id])
      .filter((warehouse): warehouse is Warehouse => warehouse != null);
  },
);

export const WarehouseListSelectors = {
    selectWarehouseListState,
    selectWarehouseListLoaded,
    selectWarehouseListLoading,
    selectWarehouseListIds,
    selectWarehouseList,
};

