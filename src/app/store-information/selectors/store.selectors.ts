import { createSelector } from '@ngrx/store';
import { selectStoresState } from './features.selectors';
import { storeAdapter } from '../states';
import { StoreReducer } from '../reducers';

export const selectStoreEntitiesState = createSelector(
  selectStoresState,
  state => state[StoreReducer.storesFeatureKey],
);

export const {
  selectIds: selectStoreIds,
  selectEntities: selectStoreEntities,
  selectAll: selectAllStores,
  selectTotal: selectTotalStores,
} = storeAdapter.getSelectors(selectStoreEntitiesState);

export const LocationSelectors = {
  selectStoreEntitiesState,
  selectStoreIds,
  selectStoreEntities,
  selectAllStores,
  selectTotalStores,
};

export const selectCurrentStore = (id) => createSelector(
  selectStoreEntities,
  (storeinformations) => storeinformations[id],
);
