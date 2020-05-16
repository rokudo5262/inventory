import { createAction, props } from '@ngrx/store';
import { Customer } from '@appdata';
import { Update } from '@ngrx/entity';

export const addCustomer = createAction(
    '[Customers/API] Add Customer',
    props<{ customer: Customer }>(),
);
export const updateCustomer = createAction(
    '[Customers/API] Update Customer',
    props<{ update: Update<Customer> }>(),
);

export const removeCustomer = createAction(
    '[Customers/API] Remove Customer',
    props<{ id: number }>(),
);
export const getCustomers = createAction(
    '[Customers/API] Get Customers',
    props<{ customers: Customer[] }>(),
);
