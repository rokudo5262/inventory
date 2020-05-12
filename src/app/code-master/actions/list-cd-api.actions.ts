import { createAction, props } from '@ngrx/store';
import { CodeDetail } from '@appdata';

/**
 * Add Code Detail
 */
export const addCodeDetailSuccess = createAction(
    '[ListCodeDetail/API] Add Code Detail Success',
    props<{ codeDetail: CodeDetail }>(),
);
export const addCodeDetailFailure = createAction(
    '[ListCodeDetail/API] Add Code Detail Failure',
    props<{ errorMsg: any }>(),
);
/**
 * Load List Detail
 */
export const loadCodeDetailSuccess = createAction(
    '[ListCodeDetail/API] Load List Code Detail Success',
    props<{ codeDetails: CodeDetail[] }>(),
);
export const loadCodeDetailFailure = createAction(
    '[ListCodeDetail/API] Load List Code Detail Failure',
    props<{ errorMsg: any }>(),
);
/**
 * Load Selected Detail
 */
export const loadSelectedDetailSuccess = createAction(
    '[ListCodeDetail/API] Load Selected Code Detail Success',
    props<{ codeDetail: CodeDetail}>(),
);
export const loadSelectedCodeDetailFailure = createAction(
    '[ListCodeDetail/API] Load Selected Code Detail Failure',
    props<{ errorMsg: any }>(),
);
/**
 * Update CodeDetail
 */
export const updateCodeDetailSuccess = createAction(
    '[ListCodeDetail/API] Update Code Detail Success',
);

export const updateCodeDetailFailure = createAction(
    '[ListCodeDetail/API] Update Code Detail Failure',
    props<{ errorMsg: any }>(),
);
/**
 * Update Delete
 */
export const updateDeleteSuccess = createAction(
    '[ListCodeDetail/API] Update Detele Success',
    props<{ id: number }>(),
);

export const updateDeleteFailure = createAction(
    '[ListCodeDetail/API] Update Delete Failure',
    props<{ errorMsg: any }>(),
);
/**
 * Update Delete Many
 */
export const updateDeletesSuccess = createAction(
    '[ListCodeDetail/API] Update Detele Many Success',
    props<{ ids: number[] }>(),
);

export const updateDeletesFailure = createAction(
    '[ListCodeDetail/API] Update Delete Many Failure',
    props<{ errorMsg: any }>(),
);
