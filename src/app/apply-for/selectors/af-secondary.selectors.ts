import { createSelector } from '@ngrx/store';
import { selectApplyForHeadersState } from './features.selectors';
import { ApplyForSecondaryCustomerReducer } from '../reducers';
import { applyForSecondaryCustomerAdapter } from '../states/af-secondary.state';

export const selectApplyForSecondaryCustomerEntitiesState = createSelector(
    selectApplyForHeadersState,
    state => state[ApplyForSecondaryCustomerReducer.applyForSecondaryCustomersFeatureKey]
);

export const {
    selectIds: selectApplyForSecondaryCustomerIds,
    selectEntities: selectApplyForSecondaryCustomerEntities,
    selectAll: selectAllApplyForSecondaryCustomers,
    selectTotal: selectTotalApplyForSecondaryCustomers
} = applyForSecondaryCustomerAdapter.getSelectors(selectApplyForSecondaryCustomerEntitiesState);

export const selectCurrentApplyForSecondaryCustomer = (id) => createSelector(
    selectApplyForSecondaryCustomerEntities,
    (applyForSecondaryCustomers) => applyForSecondaryCustomers[id],
);

export const ApplyForSecondaryCustomerSelectors = {
    selectApplyForSecondaryCustomerEntitiesState,
    selectApplyForSecondaryCustomerIds,
    selectApplyForSecondaryCustomerEntities,
    selectAllApplyForSecondaryCustomers,
    selectTotalApplyForSecondaryCustomers,
    selectCurrentApplyForSecondaryCustomer,
};
