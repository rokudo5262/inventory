import { createSelector } from '@ngrx/store';
import { locationAdapter } from '../states';
import { LocationReducer } from '../reducers';
import { selectLocationsState } from './location-features.selectors';

export const selectLocationEntitiesState = createSelector(
  selectLocationsState,
  state => state[LocationReducer.locationsFeatureKey],
);
export const {
  selectIds: selectLocationIds,
  selectEntities: selectLocationEntities,
  selectAll: selectAllLocations,
  selectTotal: selectTotalLocations,
} = locationAdapter.getSelectors(selectLocationEntitiesState);

export const selectCurrentLocation = (id) => createSelector(
  selectLocationEntities,
  (locations) => locations[id],
);

export const LocationSelectors = {
  selectLocationEntitiesState,
  selectLocationIds,
  selectLocationEntities,
  selectAllLocations,
  selectTotalLocations,
  selectCurrentLocation,
};
