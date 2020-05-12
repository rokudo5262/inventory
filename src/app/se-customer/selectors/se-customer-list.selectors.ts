import { selectSecondaryCustomersState } from './features.selectors';
import { createSelector } from '@ngrx/store';
import { secondarycustomerAdapter } from '../state';
import { SecondaryCustomerReducer } from '../reducers';

export const selectSecondaryCustomerEntitiesState = createSelector(
  selectSecondaryCustomersState,
  state => state[SecondaryCustomerReducer.secondarycustomersFeatureKey],
);
export const {
  selectIds: selectSecondaryCustomerIds,
  selectEntities: selectSecondaryCustomerEntities,
  selectAll: selectAllSecondaryCustomers,
  selectTotal: selectTotalSecondaryCustomers
} = secondarycustomerAdapter.getSelectors(selectSecondaryCustomerEntitiesState);
export const selectCurrentSecondaryCustomer = (id) => createSelector(
  selectSecondaryCustomerEntities,
  (secondarycustomers) => secondarycustomers[id],
);
export const SecondaryCustomerSelectors = {
  selectSecondaryCustomerEntitiesState,
  selectSecondaryCustomerIds,
  selectSecondaryCustomerEntities,
  selectAllSecondaryCustomers,
  selectTotalSecondaryCustomers,
  selectCurrentSecondaryCustomer,
};
