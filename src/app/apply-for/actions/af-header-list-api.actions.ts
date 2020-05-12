import { createAction, props } from '@ngrx/store';
import { ApplyForHeader } from '@appdata';

/**
 * Add Apply For Header
 */
export const addApplyForHeaderSuccess = createAction(
    '[ListApplyForHeader/API] Add Apply For Header Success',
    props<{ applyForHeader: ApplyForHeader }>(),
);
export const addApplyForHeaderFailure = createAction(
    '[ListApplyForHeader/API] Add Apply For Header Failure',
    props<{ errorMsg: any }>(),
);
/**
 * Load List ApplyForHeader
 */
export const loadApplyForHeaderSuccess = createAction(
    '[ListApplyForHeader/API] Load List Apply For Header Success',
    props<{ applyForHeaders: ApplyForHeader[] }>(),
);
export const loadApplyForHeaderFailure = createAction(
    '[ListApplyForHeader/API] Load List Apply For Header Failure',
    props<{ errorMsg: any }>(),
);

/**
 * Load Selected ApplyForHeader
 */
export const loadSelectedApplyForHeaderSuccess = createAction(
    '[ListApplyForHeader/API] Load Selected Apply For Header Success',
    props<{ applyForHeader: ApplyForHeader}>(),
);
export const loadSelectedApplyForHeaderFailure = createAction(
    '[ListApplyForHeader/API] Load Selected Apply For Header Failure',
    props<{ errorMsg: any }>(),
);
/**
 * Update ApplyForHeader
 */
export const updateApplyForHeaderSuccess = createAction(
    '[ListApplyForHeader/API] Update Apply For Header Success',
);

export const updateApplyForHeaderFailure = createAction(
    '[ListApplyForHeader/API] Update Apply For Header Failure',
    props<{ errorMsg: any }>(),
);
/**
 * Update Delete
 */
export const updateDeleteSuccess = createAction(
    '[ListApplyForHeader/API] Update Detele Success',
    props<{ id: number }>(),
);

export const updateDeleteFailure = createAction(
    '[ListApplyForHeader/API] Update Delete Failure',
    props<{ errorMsg: any }>(),
);
