import { WarehouseReducer } from '../reducers';
import { warehouseAdapter } from '../states';
import { createSelector } from '@ngrx/store';
import { selectWarehousesState } from './feature.selectors';

export const selectWarehouseEntitiesState = createSelector(
  selectWarehousesState,
  state => state[WarehouseReducer.warehousesFeatureKey],
);

export const {
  selectIds: selectWarehouseIds,
  selectEntities: selectWarehouseEntities,
  selectAll: selectAllWarehouses,
  selectTotal: selectTotalWarehouses,
} = warehouseAdapter.getSelectors(selectWarehouseEntitiesState);

export const WarehouseSelectors = {
  selectWarehouseEntitiesState,
  selectWarehouseIds,
  selectWarehouseEntities,
  selectAllWarehouses,
  selectTotalWarehouses,
};

export const selectCurrentWarehouse = (id) => createSelector(
  selectWarehouseEntities,
  (warehouses) => warehouses[id]
);
