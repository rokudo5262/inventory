import { props, createAction } from '@ngrx/store';
import { Structure } from '@app/@core/data/structure';

export const addStructureSuccess = createAction(
  '[Collection-Structure/API] Add Structure Success',
  props<{ structure: Structure }>(),
);

export const addStructureFailure = createAction(
  '[Collection-Structure/API] Add Structure Failure',
  props<{ errorMsg: any }>(),
);
export const updateStructureSuccess = createAction(
  '[Collection-Structure/API] update structure success',
  // props<{  structured: Structure }>(),
);

export const updateStructureFailure = createAction(
  '[Collection-Structure/API] update structure failure',
  props<{ errorMsg: any }>(),
);

export const deleteStructureSuccess = createAction(
  '[Collection-Structure/API] delete structure success',
  props<{ id: number }>(),
);

export const deleteStructureFailure = createAction(
  '[Collection-Structure/API] delete structure failure',
  props<{ errorMsg: any }>(),
);

export const loadStructuresSuccess = createAction(
  '[Collection-Structure/API] Load Structures Success',
  props<{ structures: Structure[] }>(),
);

export const loadStructuresFailure = createAction(
  '[Collection-Structure/API] Load Structures Failure',
  props<{ errorMsg: any }>(),
);

export const deletesStructureSuccess = createAction(
  '[Collection-Structure/API] deletes structure success',
  props<{ ids: number[] }>(),
);

export const deletesStructureFailure = createAction(
  '[Collection-Structure/API] deletes structure failure',
  props<{ errorMsg: any }>(),
);
