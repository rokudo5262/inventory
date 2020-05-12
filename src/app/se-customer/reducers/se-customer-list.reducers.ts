import { createReducer, on } from '@ngrx/store';
import { secondarycustomerInitialState, secondarycustomerAdapter } from '../state';
import { SecondaryCustomerApiActions, SecondaryCustomerCollectionApiActions } from '../actions';

export const secondarycustomersFeatureKey = ' secondarycustomers';

export const reducer = createReducer(
    secondarycustomerInitialState,
    on(
        SecondaryCustomerApiActions.getSECustomerLists,
        SecondaryCustomerCollectionApiActions.loadSECustomerListSuccess,
        (state, { secondarycustomers }) => {
            secondarycustomers = secondarycustomers.filter(x => x.deleted === false);
            return secondarycustomerAdapter.addMany(secondarycustomers, state);
        }),
    on(
        SecondaryCustomerApiActions.addSECustomerList,
        SecondaryCustomerCollectionApiActions.addSECustomerListSuccess,
        (state, { secondarycustomer }) => secondarycustomerAdapter.addOne(secondarycustomer, state)
    ),
    on(
        SecondaryCustomerApiActions.updateSECustomerList,
        SecondaryCustomerCollectionApiActions.updateSECustomerListSuccess,
        (state, { update }) => secondarycustomerAdapter.updateOne(update, state)
    ),
    on(
        SecondaryCustomerApiActions.RejectedUpdateSECustomerList,
        SecondaryCustomerCollectionApiActions.RejectesUpdateSECustomerListSuccess,
        (state, { updates }) => secondarycustomerAdapter.updateMany(updates, state)
    ),
    on(
        SecondaryCustomerApiActions.removeSECustomerList,
        SecondaryCustomerCollectionApiActions.removeSECustomerListSuccess,
        (state, { id }) => secondarycustomerAdapter.removeOne(id, state)
    ),
    on(
        SecondaryCustomerApiActions.removesSECustomerList,
        SecondaryCustomerCollectionApiActions.removesSECustomerListSuccess,
        (state, { ids }) => secondarycustomerAdapter.removeMany(ids, state)
    ),
    // on(
    //     SecondaryCustomerApiActions.removesSECustomerList,
    //     SecondaryCustomerCollectionApiActions.RejectesSECustomerListSuccess,
    //     (state, {ids}) =>  secondarycustomerAdapter.removeMany(ids,state)
    // ),
    // on(
    //     SecondaryCustomerApiActions.RejectedSECustomerList,
    //     SecondaryCustomerCollectionApiActions.RejectesSECustomerListSuccess,
    //     (state, { updates }) =>  secondarycustomerAdapter.updateMany(updates,state)
    // ),
    on(
        SecondaryCustomerApiActions.ApprovedSECustomerList,
        SecondaryCustomerCollectionApiActions.ApprovedSECustomerListSuccess,
        (state, { updates }) => secondarycustomerAdapter.updateMany(updates, state)
    ),
    on(
        SecondaryCustomerApiActions.ReOpenSECustomerList,
        SecondaryCustomerCollectionApiActions.ReOpenSECustomerListSuccess,
        (state, { updates }) => secondarycustomerAdapter.updateMany(updates, state)
    ),
    on(
        SecondaryCustomerApiActions.DeactivateSECustomerList,
        SecondaryCustomerCollectionApiActions.DeactivateSECustomerListSuccess,
        (state, { updates }) => secondarycustomerAdapter.updateMany(updates, state)
    ),
);
