import { createAction } from '@ngrx/store';

export enum WarehouseListActionTypes {
    LoadWarehouseList = '[Warehouse List Page] Load Warehouse List',
}

export const loadWarehouseList = createAction(
    WarehouseListActionTypes.LoadWarehouseList,
);
