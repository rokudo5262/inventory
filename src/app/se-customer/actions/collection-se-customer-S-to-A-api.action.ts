import { props, createAction } from '@ngrx/store';
import { SecondaryCustomerShipToAddress } from '@app/@core/data/se-customer-S-to-A';
import { Update } from '@ngrx/entity';

export const addSECustomerStoASuccess = createAction(
  '[Collection-SECustomerStoA/API] Add SE Customer StoA Success',
  props<{ secustomerstoa: SecondaryCustomerShipToAddress }>(),
);

export const addSECustomerStoAFailure = createAction(
  '[Collection-SECustomerStoA/API] Add SE Customer StoA Failure',
  props<{ errorMsg: any }>(),
);

export const updateSECustomerStoASuccess = createAction(
  '[Collection-SECustomerStoA/API] Update SE Customer StoA Success',
  props<{ update: Update<SecondaryCustomerShipToAddress> }>()
);

export const updateSECustomerStoAFailure = createAction(
  '[Collection-SECustomerStoA/API] Update SE Customer StoA Failure',
  props<{ errorMsg: any }>(),
);

export const loadSECustomerStoASuccess = createAction(
  '[Collection-SECustomerStoA/API] Load SECustomer StoA Success',
  props<{ secustomerstoas: SecondaryCustomerShipToAddress[] }>(),
);

export const loadSECustomerStoAFailure = createAction(
  '[Collection-SECustomerStoA/API] Load SE Customer StoA Failure',
  props<{ errorMsg: any }>(),
);

export const removeSECustomerStoASuccess = createAction(
  '[Collection-SECustomerStoA/API] delete SE Customer StoA success',
  props<{ id: number }>(),
);

export const removeSECustomerStoAFailure = createAction(
  '[Collection-SECustomerStoA/API] delete SE Customer StoA failure',
  props<{ errorMsg: any }>(),
);

export const removesSECustomerStoASuccess = createAction(
  '[Collection-SECustomerStoA/API] deletes SE Customer StoA success',
  props<{ ids: number[] }>(),
);

export const removesSECustomerStoAFailure = createAction(
  '[Collection-SECustomerStoA/API] deletes SE Customer StoA failure',
  props<{ errorMsg: any }>(),
);
