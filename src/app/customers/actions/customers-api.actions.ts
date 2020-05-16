import { createAction, props } from '@ngrx/store';
import { Customer } from '@appdata';

/**
 * Add Customer to Collection Actions
 */
export const addCustomerSuccess = createAction(
  '[Collection/API] Add Customer Success',
  props<{ customer: Customer }>(),
);
export const addCustomerFailure = createAction(
  '[Collection/API] Add Customer Failure',
  props<{ errorMsg: any }>(),
);
/**
 * Update Customer from Collection Actions
 */
export const updateCustomerSuccess = createAction(
  '[Collection/API] Update Customer Success',
  // props<{ customer: Customer }>(),
);
export const updateCustomerFailure = createAction(
  '[Collection/API] Update Customer Failure',
  props<{ errorMsg: any }>(),
);
/**
 * Remove Customer from Collection Actions
 */
export const removeCustomerSuccess = createAction(
  '[Collection/API] Remove Customer Success',
  props<{ id: number }>(),
);
export const removeCustomerFailure = createAction(
  '[Collection/API] Remove Customer Failure',
  props<{ errorMsg: any }>(),
);
/**
 * Load Collection Actions
 */
export const loadCustomersSuccess = createAction(
  '[Collection/API] Load Customers Success',
  props<{ customers: Customer[] }>(),
);
export const loadCustomersFailure = createAction(
  '[Collection/API] Load Customers Failure',
  props<{ errorMsg: any }>(),
);
