import { createAction, props } from '@ngrx/store';
import { Structure } from '@app/@core/data/structure';
import { Update } from '@ngrx/entity';

export const addStructure = createAction(
  '[Structures/API] Add Structure',
  props<{ structure: Structure }>(),
);

export const getStructures = createAction(
  '[Structures/API] Get Structures',
  props<{ structures: Structure[] }>(),
);

export const updateStructure = createAction(
  '[Structures/API] update Structure',
  props<{ update: Update<Structure> }>(),
);

export const deleteStructure = createAction(
  '[Structures/API] delete Structure',
  props<{ id: number }>(),
);
export const deleteStructures = createAction(
  '[Structures/API] deletes Structure',
  props<{ ids: number[] }>(),
);
