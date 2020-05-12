import { createAction, props } from '@ngrx/store';
import { ApplyForCustomer } from '@appdata';

/**
 * Add Apply For Customer
 */
export const addApplyForCustomerSuccess = createAction(
    '[ListApplyForCustomer/API] Add Apply For Customer Success',
    props<{ applyForCustomer: ApplyForCustomer }>(),
);
export const addApplyForCustomerFailure = createAction(
    '[ListApplyForCustomer/API] Add Apply For Customer Failure',
    props<{ errorMsg: any }>(),
);
/**
 * Load List ApplyForCustomer
 */
export const loadApplyForCustomerSuccess = createAction(
    '[ListApplyForCustomer/API] Load List Apply For Customer Success',
    props<{ applyForCustomers: ApplyForCustomer[] }>(),
);
export const loadApplyForCustomerFailure = createAction(
    '[ListApplyForCustomer/API] Load List Apply For Customer Failure',
    props<{ errorMsg: any }>(),
);

/**
 * Load Selected ApplyForCustomer
 */
export const loadSelectedApplyForCustomerSuccess = createAction(
    '[ListApplyForCustomer/API] Load Selected Apply For Customer Success',
    props<{ applyForCustomer: ApplyForCustomer }>(),
);
export const loadSelectedApplyForCustomerFailure = createAction(
    '[ListApplyForCustomer/API] Load Selected Apply For Customer Failure',
    props<{ errorMsg: any }>(),
);
/**
 * Update ApplyForCustomer
 */
export const updateApplyForCustomerSuccess = createAction(
    '[ListApplyForCustomer/API] Update Apply For Customer Success',
);

export const updateApplyForCustomerFailure = createAction(
    '[ListApplyForCustomer/API] Update Apply For Customer Failure',
    props<{ errorMsg: any }>(),
);
/**
 * Update Delete
 */
export const updateDeleteSuccess = createAction(
    '[ListApplyForCustomer/API] Update Detele Success',
    props<{ id: number }>(),
);

export const updateDeleteFailure = createAction(
    '[ListApplyForCustomer/API] Update Delete Failure',
    props<{ errorMsg: any }>(),
);
/**
 * Update Delete Many
 */
export const updateDeletesSuccess = createAction(
    '[ListApplyForCustomer/API] Update Detele Many Success',
    props<{ ids: number[] }>(),
);

export const updateDeletesFailure = createAction(
    '[ListApplyForCustomer/API] Update Delete Many Failure',
    props<{ errorMsg: any }>(),
);
