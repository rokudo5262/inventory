import { createAction, props } from '@ngrx/store';
import { CodeMaster } from '@appdata';
import { Update } from '@ngrx/entity';

/**
 * Add Code Master
 */
export const addCodeMasterSuccess = createAction(
    '[ListCodeMaster/API] Add Code Master Success',
    props<{ codeMaster: CodeMaster }>(),
);
export const addCodeMasterFailure = createAction(
    '[ListCodeMaster/API] Add Code Master Failure',
    props<{ errorMsg: any }>(),
);
/**
 * Load List CodeMaster
 */
export const loadCodeMasterSuccess = createAction(
    '[ListCodeMaster/API] Load List Code Master Success',
    props<{ codeMasters: CodeMaster[] }>(),
);
export const loadCodeMasterFailure = createAction(
    '[ListCodeMaster/API] Load List Code Master Failure',
    props<{ errorMsg: any }>(),
);
/**
 * Update CodeMaster
 */
export const updateCodeMasterSuccess = createAction(
    '[ListCodeMaster/API] Update Code Master Success',
    props<{ update: Update<CodeMaster> }>(),
);

export const updateCodeMasterFailure = createAction(
    '[ListCodeMaster/API] Update Code Master Failure',
    props<{ errorMsg: any }>(),
);
/**
 * Update Delete
 */
export const updateDeleteSuccess = createAction(
    '[ListCodeMaster/API] Update Detele Success',
    props<{ id: number }>(),
);

export const updateDeleteFailure = createAction(
    '[ListCodeMaster/API] Update Delete Failure',
    props<{ errorMsg: any }>(),
);
/**
 * Update Delete Many
 */
export const updateDeletesSuccess = createAction(
    '[ListCodeMaster/API] Update Detele Many Success',
    props<{ ids: number[] }>(),
);

export const updateDeletesFailure = createAction(
    '[ListCodeMaster/API] Update Delete Many Failure',
    props<{ errorMsg: any }>(),
);
/**
 * Update System Many
 */
export const updateSystemsSuccess = createAction(
    '[ListCodeMaster/API] Update System Many Success',
    props<{ updates: Update<CodeMaster>[] }>(),
);

export const updateSystemsFailure = createAction(
    '[ListCodeMaster/API] Update System Many Failure',
    props<{ errorMsg: any }>(),
);
