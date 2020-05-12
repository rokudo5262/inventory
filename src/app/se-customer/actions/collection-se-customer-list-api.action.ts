import { props, createAction } from '@ngrx/store';
import { SecondaryCustomer } from '@app/@core/data/se-customer';
import { Update } from '@ngrx/entity';

export const addSECustomerListSuccess = createAction(
  '[Collection-SECustomerList/API] Add SE Customer List Success',
  props<{ secondarycustomer: SecondaryCustomer }>(),
);

export const addSECustomerListFailure = createAction(
  '[Collection-SECustomerList/API] Add SE Customer List Failure',
  props<{ errorMsg: any }>(),
);

export const updateSECustomerListSuccess = createAction(
  '[Collection-SECustomerList/API] Update SE Customer List Success',
  props<{ update: Update<SecondaryCustomer> }>(),
);

export const updateSECustomerListFailure = createAction(
  '[Collection-SECustomerList/API] Update SE Customer List Failure',
  props<{ errorMsg: any }>(),
);

export const loadSECustomerListSuccess = createAction(
  '[Collection-SECustomerList/API] Load SE Customer List Success',
  props<{ secondarycustomers: SecondaryCustomer[] }>(),
);

export const loadSECustomerListFailure = createAction(
  '[Collection-SECustomerList/API] Load SE Customer List Failure',
  props<{ errorMsg: any }>(),
);

export const removeSECustomerListSuccess = createAction(
  '[Collection-SECustomerList/API] delete SE Customer List success',
  props<{ id: number }>(),
);

export const removeSECustomerListFailure = createAction(
  '[Collection-SECustomerList/API] delete SE Customer List failure',
  props<{ errorMsg: any }>(),
);

export const removesSECustomerListSuccess = createAction(
  '[Collection-SECustomerList/API] deletes SE Customer List success',
  props<{ ids: number[] }>(),
);

export const removesSECustomerListFailure = createAction(
  '[Collection-SECustomerList/API] deletes SE Customer List failure',
  props<{ errorMsg: any }>(),
);

export const RejectesSECustomerListSuccess = createAction(
  '[Collection-SECustomerList/API] Rejectes SE Customer List success',
  props<{ ids: number[] }>(),
);

export const RejectedSECustomerListFailure = createAction(
  '[Collection-SECustomerList/API] Rejectes SE Customer List failure',
  props<{ errorMsg: any }>(),
);

export const RejectesUpdateSECustomerListSuccess = createAction(
  '[Collection-SECustomerList/API] Rejectes update SE Customer List success',
  props<{ updates: Update<SecondaryCustomer>[] }>(),
);

export const RejectedUpdateSECustomerListFailure = createAction(
  '[Collection-SECustomerList/API] Rejectes update SE Customer List failure',
  props<{ errorMsg: any }>(),
);

export const ApprovedSECustomerListFailure = createAction(
  '[Collection-SECustomerList/API] Approved SE Customer List failure',
  props<{ errorMsg: any }>(),
);

export const ApprovedSECustomerListSuccess = createAction(
  '[Collection-SECustomerList/API] Approved SE Customer List success',
  props<{ updates: Update<SecondaryCustomer>[] }>(),
);

export const ReOpenSECustomerListFailure = createAction(
  '[Collection-SECustomerList/API] ReOpen SE Customer List failure',
  props<{ errorMsg: any }>(),
);

export const ReOpenSECustomerListSuccess = createAction(
  '[Collection-SECustomerList/API] ReOpen SE Customer List success',
  props<{ updates: Update<SecondaryCustomer>[] }>(),
);

export const DeactivateSECustomerListFailure = createAction(
  '[Collection-SECustomerList/API] Deactivate SE Customer List failure',
  props<{ errorMsg: any }>(),
);

export const DeactivateSECustomerListSuccess = createAction(
  '[Collection-SECustomerList/API] Deactivate SE Customer List success',
  props<{ updates: Update<SecondaryCustomer>[] }>(),
);
