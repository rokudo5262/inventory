import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { ILocation } from '@appdata/location';

/**
 * Add Location to Collection Actions
 */
export const addLocationSuccess = createAction(
  '[Collection/API] Add Location Success',
  props<{ location: ILocation }>(),
);

export const addLocationFailure = createAction(
  '[Collection/API] Add Location Failure',
  props<{ errorMsg: any }>(),
);

/**
 * Remove Location from Collection Actions
 */
export const removeLocationSuccess = createAction(
  '[Collection/API] Remove Location Success',
  props<{ id: number }>(),
);

export const removeLocationFailure = createAction(
  '[Collection/API] Remove Location Failure',
  props<{ errorMsg: any }>(),
);

/**
 * Update Location from Collection Actions
 */
export const updateLocationSuccess = createAction(
  '[Collection/API] Update Location Success',
  props<{ update: Update<ILocation> }>(),
);

export const updateLocationFailure = createAction(
  '[Collection/API] Update Location Failure',
  props<{ errorMsg: any }>(),
);

/**
 * Load Collection Actions
 */
export const loadLocationsSuccess = createAction(
  '[Collection/API] Load Locations Success',
  props<{ locations: ILocation[] }>(),
);

export const loadLocationsFailure = createAction(
  '[Collection/API] Load Locations Failure',
  props<{ errorMsg: any }>(),
);
