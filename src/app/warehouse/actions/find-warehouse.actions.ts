import { createAction, props } from '@ngrx/store';

export const searchWarehouses = createAction(
    '[Find Warehouse] Search Warehouses',
    props<{ query: string }>(),
);
