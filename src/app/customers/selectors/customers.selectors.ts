import { createSelector } from '@ngrx/store';
import { CustomersReducer } from '../reducers';
import { selectCustomersState } from './features-customers.selectors';
import { customerAdapter } from '../states';

export const selectCustomersEntitiesState = createSelector(
    selectCustomersState,
    state => state[CustomersReducer.customersFeatureKey],
);

export const {
    selectIds: selectCustomerIds,
    selectEntities: selectCustomerEntities,
    selectAll: selectAllCustomers,
    selectTotal: selectTotalCustomers,
} = customerAdapter.getSelectors(selectCustomersEntitiesState);

export const CustomersSelectors = {
    selectCustomersEntitiesState,
    selectCustomerIds,
    selectCustomerEntities,
    selectAllCustomers,
    selectTotalCustomers,
};

export const selectCurrentCustomer = (id) => createSelector(
    selectCustomerEntities,
    (customers) => customers[id],
);
