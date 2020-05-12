import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { ILocation } from '@appdata/location';

export const addLocation = createAction(
  '[Locations/API] Add Location',
  props<{ location: ILocation }>(),
);
export const updateLocation = createAction(
  '[Locations/API] Update Location',
  props<{ update: Update<ILocation> }>(),
);
export const removeLocation = createAction(
  '[Locations/API] Remove Location',
  props<{ id: number }>(),
);
export const getLocations = createAction(
  '[Locations/API] Get Locations',
  props<{ locations: ILocation[] }>(),
);
