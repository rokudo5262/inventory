import { createReducer, on } from '@ngrx/store';
import { applyForHeaderInitialState, applyForHeaderAdapter } from '../states';
import { ApplyForHeaderApiActions, ApplyForHeaderListApiActions } from '../actions';

export const applyForHeadersFeatureKey = 'applyForHeaders';

export const reducer = createReducer(
    applyForHeaderInitialState,
    on(
        ApplyForHeaderListApiActions.loadApplyForHeaderSuccess,
        (state, { applyForHeaders }) => {
            applyForHeaders = applyForHeaders;
            return applyForHeaderAdapter.addMany(applyForHeaders, state);
        }
    ),
    on(
        ApplyForHeaderApiActions.getApplyForHeader,
        ApplyForHeaderListApiActions.loadSelectedApplyForHeaderSuccess,
        (state, { applyForHeader }) => {
            applyForHeader = applyForHeader;
            return applyForHeaderAdapter.addOne(applyForHeader, state);
        }
    ),
    on(
        ApplyForHeaderApiActions.addApplyForHeader,
        ApplyForHeaderListApiActions.addApplyForHeaderSuccess,
        (state, { applyForHeader }) => applyForHeaderAdapter.addOne(applyForHeader, state)
    ),
    on(
        ApplyForHeaderApiActions.updateApplyForHeader,
        (state, { update }) => applyForHeaderAdapter.updateOne(update, state),
    ),
    on(
        ApplyForHeaderApiActions.updateDelete,
        ApplyForHeaderListApiActions.updateDeleteSuccess,
        (state, { id }) => applyForHeaderAdapter.removeOne(id, state)
    ),
);
