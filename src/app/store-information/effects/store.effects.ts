import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { StoresApiActions, StoresActions } from '../actions';
import { StoresService } from '../services/stores.service';
import { EMPTY as empty, of } from 'rxjs';
import { StoreInformation } from '@app/@core/data/store';

@Injectable()
export class StoreEffects {
    storeinformations$ = createEffect(() => this.action$.pipe(
        ofType(StoresActions.getStores),
        mergeMap(() => this.storesService.getStores()
            .pipe(
                map((items: StoreInformation[]) => StoresApiActions
                    .loadStoreSuccess({ storeinformations: items })),
                catchError(err => of(StoresApiActions
                    .loadStoreFailure({ errorMsg: err.message })))
            )))
    );
    removes$ = createEffect(() => this.action$.pipe(
        ofType(StoresActions.removeStore),
        switchMap(({ id }) => {
            if (id <= 0) {
                return empty;
            }
            return this.storesService.removeStore(id).pipe(
                map((item: StoreInformation) => StoresApiActions
                    .removeStoreSuccess({ id: item ? item.id : 0 })),
                catchError(error => of(StoresApiActions
                    .removeStoreFailure({ errorMsg: error.message })))
            );
        })
    ));
    update$ = createEffect(() => this.action$.pipe(
        ofType(StoresActions.updateStore),
        switchMap(({ update }) =>
            this.storesService.updateStore(update.changes).pipe(
                map(item => StoresApiActions
                    .updateStoreSuccess()),
                catchError(error => of(StoresApiActions
                    .updateStoreFailure({ errorMsg: error.message })))
            ))
    ));
    adds$ = createEffect(() => this.action$.pipe(
        ofType(StoresActions.addStore),
        switchMap(({ storeinformation }) =>
            this.storesService.addStore(storeinformation)
                .pipe(
                    map((item: StoreInformation) => StoresApiActions
                        .addStoreSuccess({ storeinformation: item })),
                    catchError(error => of(StoresApiActions
                        .addStoreFailure({ errorMsg: error.message })))
                ))
    ));
    constructor(
        private action$: Actions,
        private storesService: StoresService,
    ) { }
}
