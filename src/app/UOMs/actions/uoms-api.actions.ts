import { createAction, props } from '@ngrx/store';
import { UOM } from '@appdata/uom';

/**
 * Add Uom Actions
 */
export const addUomSuccess = createAction(
  '[Uom/API] Add UOM Success',
  props<{ uom: UOM }>(),
);
export const addUomFailure = createAction(
  '[Uom/API] Add UOM Failure',
  props<{ errorMsg: any }>(),
);
/**
 * Load Uom Actions
 */
export const loadUomsSuccess = createAction(
  '[Uom/API] Load UOMs Success',
  props<{ uoms: UOM[] }>(),
);
export const loadUomsFailure = createAction(
  '[Uom/API] Load UOMs Failure',
  props<{ errorMsg: any }>(),
);
/**
 * Update UOM Actions
 */
export const updateUomSuccess = createAction(
  '[Uom/API] Update UOM Success',
);

export const updateUomFailure = createAction(
  '[Uom/API] Update UOM Failure',
  props<{ errorMsg: any }>(),
);
/**
 * Remove UOM from Collection Actions
 */
export const removeUomSuccess = createAction(
  '[Uom/API] Remove UOM Success',
  props<{ id: number }>(),
);
export const removeUomFailure = createAction(
  '[Uom/API] Remove UOM Failure',
  props<{ errorMsg: any }>(),
);
/**
 * Load Selected UOM
 */
export const loadSelectedUomSuccess = createAction(
  '[Collection/API] Load Selected UOM Success',
  props<{ uom: UOM }>(),
);
export const loadSelectedUomFailure = createAction(
  '[Collection/API] Load Selected UOM Failure',
  props<{ errorMsg: any }>(),
);
/**
 * Update Delete
 */
export const updateDeleteSuccess = createAction(
  '[Collection/API] Update Delete UOM Success',
  props<{ id: number }>(),
);
export const updateDeleteFailure = createAction(
  '[Collection/API] Update Delete UOM Failure',
  props<{ errorMsg: any }>(),
);
/**
 * Update Delete Many
 */
export const updateDeletesSuccess = createAction(
  '[Collection/API] Update Delete Many UOMs Success',
  props<{ ids: number[] }>(),
);
export const updateDeletesFailure = createAction(
  '[Collection/API] Update Delete Many UOMs Failure',
  props<{ errorMsg: any }>(),
);
