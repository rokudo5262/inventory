import { createReducer, on } from '@ngrx/store';
import { secondarycustomershiptoaddressInitialState, secondarycustomershiptoaddressAdapter } from '../state';
import { SecondaryCustomerShipToAddressApiActions, SecondaryCustomerShipToAddressCollectionApiActions } from '../actions';

export const secustomerstoasFeatureKey = ' secustomerstoas';

export const reducer = createReducer(
    secondarycustomershiptoaddressInitialState,
    on(
        SecondaryCustomerShipToAddressApiActions.getSECustomerStoAs,
        SecondaryCustomerShipToAddressCollectionApiActions.loadSECustomerStoASuccess,
        (state, { secustomerstoas }) => {
            secustomerstoas = secustomerstoas.filter(x => x.deleted === false);
            return secondarycustomershiptoaddressAdapter.addMany(secustomerstoas, state);
        }
    ),
    on(
        SecondaryCustomerShipToAddressApiActions.addSECustomerStoA,
        SecondaryCustomerShipToAddressCollectionApiActions.addSECustomerStoASuccess,
        (state, { secustomerstoa }) => secondarycustomershiptoaddressAdapter.addOne(secustomerstoa, state)
    ),
    on(
        SecondaryCustomerShipToAddressApiActions.updateSECustomerStoA,
        SecondaryCustomerShipToAddressCollectionApiActions.updateSECustomerStoASuccess,
        (state, { update }) => secondarycustomershiptoaddressAdapter.updateOne(update, state)
    ),
    on(
        SecondaryCustomerShipToAddressApiActions.removeSECustomerStoA,
        SecondaryCustomerShipToAddressCollectionApiActions.removeSECustomerStoASuccess,
        (state, { id }) => secondarycustomershiptoaddressAdapter.removeOne(id, state)
    ),
    on(
        SecondaryCustomerShipToAddressApiActions.removesSECustomerStoA,
        SecondaryCustomerShipToAddressCollectionApiActions.removesSECustomerStoASuccess,
        (state, { ids }) => secondarycustomershiptoaddressAdapter.removeMany(ids, state)
    ),
);
