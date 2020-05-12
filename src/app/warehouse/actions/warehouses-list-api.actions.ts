import { createAction, props } from '@ngrx/store';
import { Warehouse } from '@appdata';

/**
 * Add Warehouse
 */
export const addWarehouseSuccess = createAction(
    '[List/API] Add Warehouse Success',
    props<{ warehouse: Warehouse }>(),
);
export const addWarehouseFailure = createAction(
    '[List/API] Add Warehouse Failure',
    props<{ errorMsg: any }>(),
);
/**
 * Update Warehouse
 */
export const updateWarehouseSuccess = createAction(
    '[Warehouses/API] Update Warehouse Success',
    // props<{ update: Update<Warehouse> }>(),
);
export const updateWarehouseFailure = createAction(
    '[Warehouses/API] Update Warehouse Failure',
    props<{ errorMsg: any }>(),
);
/**
 * Remove Book
 */
export const removeWarehouseSuccess = createAction(
    '[Warehouses/API] Remove Warehouse Success',
    props<{ id: number }>(),
);
export const removeWarehouseFailure = createAction(
    '[Warehouses/API] Remove Warehouse Failure',
    props<{ errorMsg: any }>(),
);
/**
 * Load List Warehouses
 */
export const loadWarehousesSuccess = createAction(
    '[Warehouses/API] Load Warehouse Success',
    props<{ warehouses: Warehouse[] }>(),
);
export const loadWarehousesFailure = createAction(
    '[Warehouses/API] Load Warehouse Failure',
    props<{ errorMsg: any }>(),
);
