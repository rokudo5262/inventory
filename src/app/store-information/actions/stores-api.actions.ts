import { createAction, props } from '@ngrx/store';
import { StoreInformation } from '@app/@core/data/store';


/**
 * Add Location to Collection Actions
 */
export const addStoreSuccess = createAction(
  '[Collection/API] Add Store Success',
  props<{ storeinformation: StoreInformation }>(),
);
export const addStoreFailure = createAction(
  '[Collection/API] Add Store Failure',
  props<{ errorMsg: any }>(),
);
/**
 * Remove Location from Collection Actions
 */
export const removeStoreSuccess = createAction(
  '[Collection/API] Remove Store Success',
  props<{ id: number }>(),
);
export const removeStoreFailure = createAction(
  '[Collection/API] Remove Store Failure',
  props<{ errorMsg: any }>(),
);
/**
 * Update Location from Collection Actions
 */
export const updateStoreSuccess = createAction(
  '[Collection/API] Update Store Success',
  // props<{ update: Update<StoreInformation> }>(),
);
export const updateStoreFailure = createAction(
  '[Collection/API] Update Store Failure',
  props<{ errorMsg: any }>(),
);
/**
 * Load Collection Actions
 */
export const loadStoreSuccess = createAction(
  '[Collection/API] Load Store Success',
  props<{ storeinformations: StoreInformation[] }>(),
);
export const loadStoreFailure = createAction(
  '[Collection/API] Load Stores Failure',
  props<{ errorMsg: any }>(),
);
