import { props, createAction } from '@ngrx/store';
import { StructureValue } from '@app/@core/data/structure-value';


export const addStructureValueSuccess = createAction(
  '[Collection-StructureValue/API] Add StructureValue Success',
  props<{ structurevalue: StructureValue }>(),
);

export const addStructureValueFailure = createAction(
  '[Collection-StructureValue/API] Add StructureValue Failure',
  props<{ errorMsg: any }>(),
);

export const updateStructureValueSuccess = createAction(
  '[Collection-StructureValue/API]] updatestructure value success',
);

export const updateStructureValueFailure = createAction(
  '[Collection-StructureValue/API]] update structure value failure',
  props<{ errorMsg: any }>(),
);

export const deleteStructureValueSuccess = createAction(
  '[Collection-StructureValue/API] delete structureValue success',
  props<{ id: number }>(),
);

export const deleteStructureValueFailure = createAction(
  '[Collection-StructureValue/API] delete structureValue failure',
  props<{ errorMsg: any }>(),
);
export const loadStructureValuesSuccess = createAction(
  '[Collection-StructureValue/API] Load StructureValues Success',
  props<{ structurevalues: StructureValue[] }>(),
);

export const loadStructureValuesFailure = createAction(
  '[Collection-StructureValue/API] Load StructureValues Failure',
  props<{ errorMsg: any }>(),
);

export const deletesStructureValueSuccess = createAction(
  '[Collection-StructureValue/API] deletes structureValue success',
  props<{ ids: number[] }>(),
);

export const deletesStructureValueFailure = createAction(
  '[Collection-StructureValue/API] deletes structureValue failure',
  props<{ errorMsg: any }>(),
);
