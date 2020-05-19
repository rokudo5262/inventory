import { createAction, props } from '@ngrx/store';
import { IOrder } from '@app/@core/data/orders';

/**
 * Load Orders Api Actions
 */
export const loadOrdersSuccess = createAction(
  '[Order/API] Load Order Success',
  props<{ orders: IOrder[] }>(),
);
export const loadOrdersFailure = createAction(
  '[Order/API] Load Orders Failure',
  props<{ errorMsg: any }>(),
);
/**
 * Add Order Api Actions
 */
export const addOrderSuccess = createAction(
  '[Order/API] Add Order Success',
  props<{ order: IOrder }>(),
);

export const addOrderFailure = createAction(
  '[Order/API] Add Order Failure',
  props<{ errorMsg: any }>(),
);
/**
 * Update Order Api Actions
 */
export const updateOrderSuccess = createAction(
  '[Order/API] Update Order Success',
);
export const updateOrderFailure = createAction(
  '[Order/API] Update Order Failure',
  props<{ errorMsg: any }>(),
);
/**
 * Delete Order Api Actions
 */
export const deleteOrderSuccess = createAction(
  '[Order/API] Delete Order Success',
);
export const deleteOrderFailure = createAction(
  '[Order/API] Delete Order Failure',
  props<{ errorMsg: any }>(),
);
/**
 * Remove Order Api Actions
 */
export const removeOrderSuccess = createAction(
  '[Order/API] Remove Order Success',
  props<{ orderCode: number }>(),
);
export const removeOrderFailure = createAction(
  '[Order/API] Remove Order Failure',
  props<{ errorMsg: any }>(),
);


