import { props, createAction } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { SecondaryCustomerShipToAddress } from '@app/@core/data/se-customer-S-to-A';

export const addSECustomerStoA = createAction(
  '[SECustomerStoAs/API] Add SE Customer StoA',
  props<{ secustomerstoa: SecondaryCustomerShipToAddress }>(),
);

export const updateSECustomerStoA = createAction(
  '[SECustomerStoAs/API] Update  SE Customer StoA',
  props<{ update: Update<SecondaryCustomerShipToAddress> }>(),
);

export const removeSECustomerStoA = createAction(
  '[SECustomerStoAs/API] Remove SE Customer StoA',
  props<{ id: number }>(),
);

export const removesSECustomerStoA = createAction(
  '[SECustomerStoAs/API] Removes SE Customer StoA',
  props<{ ids: number[] }>(),
);

export const getSECustomerStoAs = createAction(
  '[SECustomerStoAs/API] Get SE Customer StoAs',
  props<{ secustomerstoas: SecondaryCustomerShipToAddress[] }>(),
);
