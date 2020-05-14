import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { StoreInformation } from '@app/@core/data/store';

export const addStore = createAction(
  '[Stores/API] Add Store',
  props<{ storeinformation: StoreInformation }>(),
);
export const updateStore = createAction(
  '[Stores/API] Update Store',
  props<{ update: Update<StoreInformation> }>(),
);
export const removeStore = createAction(
  '[Stores/API] Remove Store',
  props<{ id: number }>(),
);
export const getStores = createAction(
  '[Stores/API] Get Stores',
  props<{ storeinformations: StoreInformation[] }>(),
);
