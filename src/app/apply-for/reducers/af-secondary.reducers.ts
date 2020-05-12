import { createReducer, on } from '@ngrx/store';
import { applyForSecondaryCustomerInitialState, applyForSecondaryCustomerAdapter } from '../states';
import { ApplyForSecondaryCustomerApiActions, ApplyForSecondaryCustomerListApiActions } from '../actions';

export const applyForSecondaryCustomersFeatureKey = 'applyForSecondaryCustomers';

export const reducer = createReducer(
    applyForSecondaryCustomerInitialState,
    on(
        // ApplyForSecondaryCustomerApiActions.getApplyForSecondaryCustomers,
        ApplyForSecondaryCustomerListApiActions.loadApplyForSecondaryCustomerSuccess,
        (state, { applyForSecondaryCustomers }) => {
            applyForSecondaryCustomers = applyForSecondaryCustomers;
            return applyForSecondaryCustomerAdapter.addMany(applyForSecondaryCustomers, state);
        }
    ),
    on(
        ApplyForSecondaryCustomerApiActions.getApplyForSecondaryCustomer,
        ApplyForSecondaryCustomerListApiActions.loadSelectedApplyForSecondaryCustomerSuccess,
        (state, { applyForSecondaryCustomer }) => {
            applyForSecondaryCustomer = applyForSecondaryCustomer;
            return applyForSecondaryCustomerAdapter.addOne(applyForSecondaryCustomer, state);
        }
    ),
    on(
        ApplyForSecondaryCustomerApiActions.addApplyForSecondaryCustomer,
        ApplyForSecondaryCustomerListApiActions.addApplyForSecondaryCustomerSuccess,
        (state, { applyForSecondaryCustomer }) => applyForSecondaryCustomerAdapter
            .addOne(applyForSecondaryCustomer, state)
    ),
    on(
        ApplyForSecondaryCustomerApiActions.updateApplyForSecondaryCustomer,
        (state, { update }) => applyForSecondaryCustomerAdapter.updateOne(update, state),
    ),
    on(
        ApplyForSecondaryCustomerApiActions.updateDelete,
        ApplyForSecondaryCustomerListApiActions.updateDeleteSuccess,
        (state, { id }) => applyForSecondaryCustomerAdapter.removeOne(id, state)
    ),
);
