import { createAction, props } from '@ngrx/store';
import { StructureValue } from '@app/@core/data/structure-value';
import { Update } from '@ngrx/entity';

export const addStructureValue = createAction(
  '[StructureValues/API] Add StructureValue',
  props<{ structurevalue: StructureValue }>(),
);

export const getStructureValues = createAction(
  '[StructureValues/API] Get StructureValues',
  props<{ structurevalues: StructureValue[] }>(),
);

export const updateStructureValue = createAction(
  '[StructureValues/API] update StructureValue',
  props<{ update: Update<StructureValue> }>(),
);
export const deleteStructureValue = createAction(
  '[StructureValues/API] delete StructureValue',
  props<{ id: number }>(),
);
export const deleteStructureValues = createAction(
  '[StructureValues/API] deletes StructureValue',
  props<{ ids: number[] }>(),
);
