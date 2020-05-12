import { createAction, props } from '@ngrx/store';

import { Warehouse } from '@appdata';
import { Update } from '@ngrx/entity';

export const searchSuccess = createAction(
    '[Warehouses/API] Search Success',
    props<{ warehouses: Warehouse[] }>(),
);

export const searchFailure = createAction(
    '[Warehouses/API] Search Failure',
    props<{ errorMsg: string }>(),
);

export const addWarehouse = createAction(
    '[Warehouses/API] Add Warehouse',
    props<{ warehouse: Warehouse }>(),
);

export const updateWarehouse = createAction(
    '[Warehouses/API] Update Warehouse',
    props<{ update: Update<Warehouse> }>(),
);

export const removeWarehouse = createAction(
    '[Warehouses/API] Remove Warehouse',
    props<{ id: number }>(),
);

export const getWarehouses = createAction(
    '[Warehouses/API] Get Warehouses',
    props<{ warehouses: Warehouse[] }>(),
);
