import { createReducer, on } from '@ngrx/store';
import { LocationsApiActions, LocationCollectionApiActions } from '../actions';
import { locationAdapter, locationInitialState } from '../states';

export const locationsFeatureKey = 'locations';
export const reducer = createReducer(
    locationInitialState,
    on(
        LocationsApiActions.getLocations,
        LocationCollectionApiActions.loadLocationsSuccess,
        (state, { locations }) => {
            return locationAdapter.addMany(locations, state);
        }
    ),
    on(
        LocationsApiActions.addLocation,
        LocationCollectionApiActions.addLocationSuccess,
        (state, { location }) => locationAdapter.addOne(location, state)
    ),
    on(
        LocationsApiActions.updateLocation,
        LocationCollectionApiActions.updateLocationSuccess,
        (state, { update }) => locationAdapter.updateOne(update, state)
    ),
    on(
        LocationsApiActions.removeLocation,
        LocationCollectionApiActions.removeLocationSuccess,
        (state, { id }) => locationAdapter.removeOne(id, state)
    ),
);
