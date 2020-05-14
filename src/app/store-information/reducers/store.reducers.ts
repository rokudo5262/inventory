import { createReducer, on } from '@ngrx/store';
import { StoresApiActions, StoresActions } from '../actions';
import { storeAdapter, storeInitialState } from '../states';

export const storesFeatureKey = 'stores';
export const reducer = createReducer(
    storeInitialState,
    on(
        StoresActions.getStores,
        StoresApiActions.loadStoreSuccess,
        (state, { storeinformations }) => storeAdapter.addMany(storeinformations, state)
    ),
    on(
        StoresActions.addStore,
        StoresApiActions.addStoreSuccess,
        (state, { storeinformation }) => storeAdapter.addOne(storeinformation, state)
    ),
    on(
        StoresActions.updateStore,
        (state, { update }) => storeAdapter.updateOne(update, state)
    ),
    on(
        StoresActions.removeStore,
        StoresApiActions.removeStoreSuccess,
        (state, { id }) => storeAdapter.removeOne(id, state)
    )
);
