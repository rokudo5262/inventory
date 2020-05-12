import { createAction, props } from '@ngrx/store';
import { ApplyForSecondaryCustomer } from '@appdata';

/**
 * Add Apply For SecondaryCustomer
 */
export const addApplyForSecondaryCustomerSuccess = createAction(
    '[ListApplyForSecondaryCustomer/API] Add Apply For SecondaryCustomer Success',
    props<{ applyForSecondaryCustomer: ApplyForSecondaryCustomer }>(),
);
export const addApplyForSecondaryCustomerFailure = createAction(
    '[ListApplyForSecondaryCustomer/API] Add Apply For SecondaryCustomer Failure',
    props<{ errorMsg: any }>(),
);
/**
 * Load List ApplyForSecondaryCustomer
 */
export const loadApplyForSecondaryCustomerSuccess = createAction(
    '[ListApplyForSecondaryCustomer/API] Load List Apply For SecondaryCustomer Success',
    props<{ applyForSecondaryCustomers: ApplyForSecondaryCustomer[] }>(),
);
export const loadApplyForSecondaryCustomerFailure = createAction(
    '[ListApplyForSecondaryCustomer/API] Load List Apply For SecondaryCustomer Failure',
    props<{ errorMsg: any }>(),
);

/**
 * Load Selected ApplyForSecondaryCustomer
 */
export const loadSelectedApplyForSecondaryCustomerSuccess = createAction(
    '[ListApplyForSecondaryCustomer/API] Load Selected Apply For SecondaryCustomer Success',
    props<{ applyForSecondaryCustomer: ApplyForSecondaryCustomer}>(),
);
export const loadSelectedApplyForSecondaryCustomerFailure = createAction(
    '[ListApplyForSecondaryCustomer/API] Load Selected Apply For SecondaryCustomer Failure',
    props<{ errorMsg: any }>(),
);
/**
 * Update ApplyForSecondaryCustomer
 */
export const updateApplyForSecondaryCustomerSuccess = createAction(
    '[ListApplyForSecondaryCustomer/API] Update Apply For SecondaryCustomer Success',
);

export const updateApplyForSecondaryCustomerFailure = createAction(
    '[ListApplyForSecondaryCustomer/API] Update Apply For SecondaryCustomer Failure',
    props<{ errorMsg: any }>(),
);
/**
 * Update Delete
 */
export const updateDeleteSuccess = createAction(
    '[ListApplyForSecondaryCustomer/API] Update Detele Success',
    props<{ id: number }>(),
);

export const updateDeleteFailure = createAction(
    '[ListApplyForSecondaryCustomer/API] Update Delete Failure',
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
