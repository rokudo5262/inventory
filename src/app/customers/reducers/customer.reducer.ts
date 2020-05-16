import { createReducer, on } from '@ngrx/store';
import { CustomersActions, CustomersApiActions } from '../actions';
import { customerInitialState, customerAdapter } from '../states';

export const customersFeatureKey = 'customers';

export const reducer = createReducer(
    customerInitialState,
    on(
        CustomersActions.getCustomers,
        CustomersApiActions.loadCustomersSuccess,
        (state, { customers }) => customerAdapter.addMany(customers, state)
    ),
    on(
        CustomersActions.addCustomer,
        CustomersApiActions.addCustomerSuccess,
        (state, { customer }) => customerAdapter.addOne(customer, state)
    ),
    on(
        CustomersActions.updateCustomer,
        (state, { update }) => customerAdapter.updateOne(update, state)
    ),
    on(
        CustomersActions.removeCustomer,
        CustomersApiActions.removeCustomerSuccess,
        (state, { id }) => customerAdapter.removeOne(id, state)
    ),
);
