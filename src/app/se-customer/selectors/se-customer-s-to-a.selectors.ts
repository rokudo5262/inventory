import { selectSecondaryCustomersState } from './features.selectors';
import { createSelector } from '@ngrx/store';
import { secondarycustomershiptoaddressAdapter } from '../state';
import { SecondaryCustomerShipToAddressReducer } from '../reducers';

export const selectSecondaryCustomerShipToAddressEntitiesState = createSelector(
  selectSecondaryCustomersState,
  state => state[SecondaryCustomerShipToAddressReducer.secustomerstoasFeatureKey],
);
export const {
  selectIds: selectSecondaryCustomerShipToAddressIds,
  selectEntities: selectSecondaryCustomerShipToAddressEntities,
  selectAll: selectAllSecondaryCustomerShipToAddresss,
  selectTotal: selectTotalSecondaryCustomerShipToAddresss
} = secondarycustomershiptoaddressAdapter.getSelectors(selectSecondaryCustomerShipToAddressEntitiesState);
export const selectCurrentSecondaryCustomerShipToAddress = (id) => createSelector(
  selectSecondaryCustomerShipToAddressEntities,
  (secustomerstoas) => secustomerstoas[id],
);
export const SecondaryCustomerShipToAddressSelectors = {
  selectSecondaryCustomerShipToAddressEntitiesState,
  selectSecondaryCustomerShipToAddressIds,
  selectSecondaryCustomerShipToAddressEntities,
  selectAllSecondaryCustomerShipToAddresss,
  selectTotalSecondaryCustomerShipToAddresss,
  selectCurrentSecondaryCustomerShipToAddress,
};
