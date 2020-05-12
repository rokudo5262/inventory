import { createReducer, on } from '@ngrx/store';
import { applyForCustomerInitialState, applyForCustomerAdapter } from '../states';
import { ApplyForCustomerApiActions, ApplyForCustomerListApiActions } from '../actions';

export const applyForCustomersFeatureKey = 'applyForCustomers';

export const reducer = createReducer(
    applyForCustomerInitialState,
    on(
        ApplyForCustomerListApiActions.loadApplyForCustomerSuccess,
        (state, { applyForCustomers }) => {
            applyForCustomers = applyForCustomers;
            return applyForCustomerAdapter.addMany(applyForCustomers, state);
        }
    ),
    on(
        ApplyForCustomerApiActions.getApplyForCustomer,
        ApplyForCustomerListApiActions.loadSelectedApplyForCustomerSuccess,
        (state, { applyForCustomer }) => {
            applyForCustomer = applyForCustomer;
            return applyForCustomerAdapter.addOne(applyForCustomer, state);
        }
    ),
    on(
        ApplyForCustomerApiActions.addApplyForCustomer,
        ApplyForCustomerListApiActions.addApplyForCustomerSuccess,
        (state, { applyForCustomer }) => applyForCustomerAdapter.addOne(applyForCustomer, state)
    ),
    on(
        ApplyForCustomerApiActions.updateApplyForCustomer,
        (state, { update }) => applyForCustomerAdapter.updateOne(update, state),
    ),
    on(
        ApplyForCustomerApiActions.updateDelete,
        ApplyForCustomerListApiActions.updateDeleteSuccess,
        (state, { id }) => applyForCustomerAdapter.removeOne(id, state)
    ),
    on(
        ApplyForCustomerApiActions.updateDeletes,
        ApplyForCustomerListApiActions.updateDeletesSuccess,
        (state, { ids }) => applyForCustomerAdapter.removeMany(ids, state)
    ),
);
