import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { LocationsApiActions, LocationsActions } from '../actions';
import { LocationsService } from '../services/locations.service';
import { ILocation } from '@appdata/location';
import { EMPTY as empty, of } from 'rxjs';

@Injectable()
export class LocationEffects {
    locations$ = createEffect(() => this.action$.pipe(
        ofType(LocationsActions.getLocations),
        mergeMap(() => this.locationService.getLocations()
            .pipe(
                map((items: ILocation[]) => LocationsApiActions
                    .loadLocationsSuccess({ locations: items })),
                catchError(error => of(LocationsApiActions
                    .loadLocationsFailure({ errorMsg: error.message })))
            ))
    ));
    remove$ = createEffect(() => this.action$.pipe(
        ofType(LocationsActions.removeLocation),
        switchMap(({ id }) => {
            if (id <= 0) {
                return empty;
            }
            return this.locationService.removeLocation(id).pipe(
                map((item: ILocation) => LocationsApiActions
                    .removeLocationSuccess({ id: item ? item.id : 0 })),
                catchError(error => of(LocationsApiActions
                    .removeLocationFailure({ errorMsg: error.message })))
            );
        })
    ));
    update$ = createEffect(() => this.action$.pipe(
        ofType(LocationsActions.updateLocation),
        switchMap(({ update }) =>
            this.locationService.updateLocation(update.changes).pipe(
                map(item => LocationsApiActions
                    .updateLocationSuccess({
                        update: {
                            id: item.id,
                            changes: item
                        }
                    }
                    )),
                catchError(error => of(LocationsApiActions
                    .updateLocationFailure({ errorMsg: error.message })))
            ))
    ));
    create$ = createEffect(() => this.action$.pipe(
        ofType(LocationsActions.addLocation),
        switchMap(({ location }) =>
            this.locationService.addLocation(location).pipe(
                map((item: ILocation) => LocationsApiActions
                    .addLocationSuccess({ location: item })),
                catchError(error => of(LocationsApiActions
                    .addLocationFailure({ errorMsg: error.message })))
            ))
    ));
    constructor(
        private action$: Actions,
        private locationService: LocationsService,
    ) { }
}
