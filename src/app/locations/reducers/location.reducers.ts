import { createReducer, on } from '@ngrx/store';
import { LocationsApiActions, LocationsActions } from '../actions';
import { locationAdapter, locationInitialState } from '../states';

export const locationsFeatureKey = 'locations';
export const reducer = createReducer(
    locationInitialState,
    on(
        LocationsActions.getLocations,
        LocationsApiActions.loadLocationsSuccess,
        (state, { locations }) => {
            return locationAdapter.addMany(locations, state);
        }
    ),
    on(
        LocationsActions.addLocation,
        LocationsApiActions.addLocationSuccess,
        (state, { location }) => locationAdapter.addOne(location, state)
    ),
    on(
        LocationsActions.updateLocation,
        LocationsApiActions.updateLocationSuccess,
        (state, { update }) => locationAdapter.updateOne(update, state)
    ),
    on(
        LocationsActions.removeLocation,
        LocationsApiActions.removeLocationSuccess,
        (state, { id }) => locationAdapter.removeOne(id, state)
    ),
);
