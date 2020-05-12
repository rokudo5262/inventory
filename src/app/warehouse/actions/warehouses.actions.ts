import { props, createAction, Action } from '@ngrx/store';
import { Warehouse } from '@appdata';

export enum WarehousesActionTypes {
    SearchSuccess = '[Warehouses/API] Search Success',
    SearchFailure = '[Warehouses/API] Search Failure',
    GetWarehouses = '[Warehouse] Get Warehouses',
    GetWarehousesSuccess = '[Warehouse] Get Warehouses Success',
    GetWarehouse = '[Warehouse] Get Warehouse',
    GetWarehouseSuccess = '[Warehouse] Get Warehouse Success',
}

export const searchSuccess = createAction(
    WarehousesActionTypes.SearchSuccess,
    props<{ warehouses: Warehouse[] }>(),
);

export const searchFailure = createAction(
    WarehousesActionTypes.SearchFailure,
    props<{ errorMsg: string }>(),
);

export class GetWarehouses implements Action {
    public readonly type = WarehousesActionTypes.GetWarehouses;
}

export class GetWarehousesSuccess implements Action {
    public readonly type = WarehousesActionTypes.GetWarehousesSuccess;
    constructor( public payload: Warehouse[] ) {}
}

export class GetWarehouse implements Action {
    public readonly type = WarehousesActionTypes.GetWarehouse;
    constructor(public payload: number) {}
}

export class GetWarehouseSuccess implements Action {
    public readonly type = WarehousesActionTypes.GetWarehouseSuccess;
    constructor( public payload: Warehouse[] ) {}
}

export type WarehouseActions =
| GetWarehouses
| GetWarehousesSuccess
| GetWarehouse
| GetWarehouseSuccess;
