import { createAction, props } from '@ngrx/store';
import { UOM } from '@app/@core/data';
import { Update } from '@ngrx/entity';

export const addUom = createAction(
  '[UOMs/API] Add Location',
  props<{ uom: UOM }>(),
);

export const updateUom = createAction(
  '[UOMs/API] Update UOM',
  props<{ update: Update<UOM> }>(),
);

// export const removeUom = createAction(
//   '[UOMs/API] Remove UOM',
//   props<{ id: number }>(),
// );

export const getUoms = createAction(
  '[UOMs/API] Get UOMs',
  props<{ uoms: UOM[] }>(),
);

export const getUom = createAction(
  '[UOMs/API] Get Selected UOM',
  props<{ uom: UOM }>(),
);

export const updateDelete = createAction(
  '[UOMs/API] Update Delete',
  props<{ id: number }>(),
);

export const updateDeletes = createAction(
  '[UOMs/API] Update Delete Many',
  props<{ ids: number[] }>(),
);
