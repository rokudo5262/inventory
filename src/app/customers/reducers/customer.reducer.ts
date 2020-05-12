import { createReducer, on } from '@ngrx/store';
import { CustomersApiActions, CustomerCollectionApiActions } from '../actions';
import { customerInitialState, customerAdapter } from '../states';

export const customersFeatureKey = 'customers';

export const reducer = createReducer(
    customerInitialState,
    on(
        CustomersApiActions.getCustomers,
        CustomerCollectionApiActions.loadCustomersSuccess,
        (state, { customers }) => customerAdapter.addMany(customers, state)
    ),
    on(
        CustomersApiActions.addCustomer,
        CustomerCollectionApiActions.addCustomerSuccess,
        (state, { customer }) => customerAdapter.addOne(customer, state)
    ),
    on(
        CustomersApiActions.updateCustomer,
        (state, { update }) => customerAdapter.updateOne(update, state)
    ),
    on(
        CustomersApiActions.removeCustomer,
        CustomerCollectionApiActions.removeCustomerSuccess,
        (state, { id }) => customerAdapter.removeOne(id, state)
    ),
);
