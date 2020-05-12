import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { LocationsApiActions, LocationCollectionApiActions } from '../actions';
import { LocationsService } from '../services/locations.service';
import { ILocation } from '@appdata/location';
import { EMPTY as empty, of } from 'rxjs';

@Injectable()
export class LocationEffects {
    locations$ = createEffect(() => this.action$.pipe(
        ofType(LocationsApiActions.getLocations),
        mergeMap(() => this.locationService.getLocations()
            .pipe(
                map((items: ILocation[]) => LocationCollectionApiActions
                    .loadLocationsSuccess({ locations: items })),
                catchError(error => of(LocationCollectionApiActions
                    .loadLocationsFailure({ errorMsg: error.message })))
            ))
    ));
    remove$ = createEffect(() => this.action$.pipe(
        ofType(LocationsApiActions.removeLocation),
        switchMap(({ id }) => {
            if (id <= 0) {
                return empty;
            }
            return this.locationService.removeLocation(id).pipe(
                map((item: ILocation) => LocationCollectionApiActions
                    .removeLocationSuccess({ id: item ? item.id : 0 })),
                catchError(error => of(LocationCollectionApiActions
                    .removeLocationFailure({ errorMsg: error.message })))
            );
        })
    ));
    update$ = createEffect(() => this.action$.pipe(
        ofType(LocationsApiActions.updateLocation),
        switchMap(({ update }) =>
            this.locationService.updateLocation(update.changes).pipe(
                map(item => LocationCollectionApiActions
                    .updateLocationSuccess({
                        update: {
                            id: item.id,
                            changes: item
                        }
                    }
                    )),
                catchError(error => of(LocationCollectionApiActions
                    .updateLocationFailure({ errorMsg: error.message })))
            ))
    ));
    create$ = createEffect(() => this.action$.pipe(
        ofType(LocationsApiActions.addLocation),
        switchMap(({ location }) =>
            this.locationService.addLocation(location).pipe(
                map((item: ILocation) => LocationCollectionApiActions
                    .addLocationSuccess({ location: item })),
                catchError(error => of(LocationCollectionApiActions
                    .addLocationFailure({ errorMsg: error.message })))
            ))
    ));
    constructor(
        private action$: Actions,
        private locationService: LocationsService,
    ) { }
}
