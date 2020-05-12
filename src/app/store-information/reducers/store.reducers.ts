import { createReducer, on } from '@ngrx/store';
import { StoresApiActions, StoreCollectionApiActions } from '../actions';
import { storeAdapter, storeInitialState } from '../states';

export const storesFeatureKey = 'stores';
export const reducer = createReducer(
    storeInitialState,
    on(
        StoresApiActions.getStores,
        StoreCollectionApiActions.loadStoreSuccess,
        (state, { storeinformations }) => storeAdapter.addMany(storeinformations, state)
    ),
    on(
        StoresApiActions.addStore,
        StoreCollectionApiActions.addStoreSuccess,
        (state, { storeinformation }) => storeAdapter.addOne(storeinformation, state)
    ),
    on(
        StoresApiActions.updateStore,
        // StoreCollectionApiActions.updateStoreSuccess,
        (state, { update }) => storeAdapter.updateOne(update, state)
    ),
    on(
        StoresApiActions.removeStore,
        StoreCollectionApiActions.removeStoreSuccess,
        (state, { id }) => storeAdapter.removeOne(id, state)
    )
);
