import { warehouseInitialState, warehouseAdapter } from '../states';
import { createReducer, on } from '@ngrx/store';
import { WarehousesApiActions, WarehouseListApiActions } from '../actions';

export const warehousesFeatureKey = 'warehouses'  ;

export const reducer = createReducer(
    warehouseInitialState,
    on(
        WarehousesApiActions.searchSuccess,
        WarehouseListApiActions.loadWarehousesSuccess,
        (state, { warehouses }) => warehouseAdapter.addMany(warehouses, state),
    ),
    on(
        WarehousesApiActions.getWarehouses,
        WarehouseListApiActions.loadWarehousesSuccess,
        (state, { warehouses }) => warehouseAdapter.addMany(warehouses, state),
    ),
    on(
        WarehousesApiActions.addWarehouse,
        WarehouseListApiActions.addWarehouseSuccess,
        (state, { warehouse }) => warehouseAdapter.addOne(warehouse, state),
    ),
    on(
        WarehousesApiActions.updateWarehouse,
        // WarehouseListApiActions.updateWarehouseSuccess,
        (state, { update }) => warehouseAdapter.updateOne(update, state),
    ),
    on(
        WarehousesApiActions.removeWarehouse,
        WarehouseListApiActions.removeWarehouseSuccess,
        (state, { id }) => warehouseAdapter.removeOne(id, state),
    )
);
