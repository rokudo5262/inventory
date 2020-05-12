import { SecondaryCustomer } from '@app/@core/data/se-customer';
import { props, createAction } from '@ngrx/store';
import { Update } from '@ngrx/entity';

export const addSECustomerList = createAction(
  '[SECustomerList/API] Add SE Customer List',
  props<{ secondarycustomer: SecondaryCustomer }>(),
);

export const updateSECustomerList = createAction(
  '[SECustomerLists/API] Update SE Customer List',
  props<{ update: Update<SecondaryCustomer> }>(),
);

export const removeSECustomerList = createAction(
  '[SECustomerLists/API] Remove SE Customer List',
  props<{ id: number }>(),
);

export const removesSECustomerList = createAction(
  '[SECustomerLists/API] Removes SE Customer List',
  props<{ ids: number[] }>(),
);


export const getSECustomerLists = createAction(
  '[SECustomerLists/API] Get SE Customer Lists',
  props<{ secondarycustomers: SecondaryCustomer[] }>(),
);

// export const RejectedSECustomerList = createAction(
//   '[SECustomerLists/API] Rejected SE Customer List',
//   props<{ ids: number[] }>(),
// );

export const RejectedUpdateSECustomerList = createAction(
  '[SECustomerLists/API] Rejected Update SE Customer List',
  props<{ updates: Update<SecondaryCustomer>[] }>(),
);


export const ApprovedSECustomerList = createAction(
  '[SECustomerLists/API] Approved SE Customer List',
  props<{ updates: Update<SecondaryCustomer>[] }>(),
);

export const ReOpenSECustomerList = createAction(
  '[SECustomerLists/API] ReOpen SE Customer List',
  props<{ updates: Update<SecondaryCustomer>[] }>(),
);

export const DeactivateSECustomerList = createAction(
  '[SECustomerLists/API] ReOpen SE Customer List',
  props<{ updates: Update<SecondaryCustomer>[] }>(),
);
