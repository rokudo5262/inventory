import { createSelector } from '@ngrx/store';
import { selectApplyForHeadersState } from './features.selectors';
import { ApplyForCustomerReducer } from '../reducers';
import { applyForCustomerAdapter } from '../states/af-customer.state';

export const selectApplyForCustomerEntitiesState = createSelector(
    selectApplyForHeadersState,
    state => state[ApplyForCustomerReducer.applyForCustomersFeatureKey]
);

export const {
    selectIds: selectApplyForCustomerIds,
    selectEntities: selectApplyForCustomerEntities,
    selectAll: selectAllApplyForCustomers,
    selectTotal: selectTotalApplyForCustomers,
} = applyForCustomerAdapter.getSelectors(selectApplyForCustomerEntitiesState);

export const selectCurrentApplyForCustomer = (id) => createSelector(
    selectApplyForCustomerEntities,
    (applyForCustomers) => applyForCustomers[id],
);

export const ApplyForCustomerSelectors = {
    selectApplyForCustomerEntitiesState,
    selectApplyForCustomerIds,
    selectApplyForCustomerEntities,
    selectAllApplyForCustomers,
    selectTotalApplyForCustomers,
    selectCurrentApplyForCustomer,
};
