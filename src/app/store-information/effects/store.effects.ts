import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { StoresApiActions, StoreCollectionApiActions } from '../actions';
import { StoresService } from '../services/stores.service';
import { EMPTY as empty, of } from 'rxjs';
import { StoreInformation } from '@app/@core/data/store';

@Injectable()
export class StoreEffects {
    storeinformations$ = createEffect(() => this.action$.pipe(
        ofType(StoresApiActions.getStores),
        mergeMap(() => this.storesService.getStores()
            .pipe(
                map((items: StoreInformation[]) => StoreCollectionApiActions
                    .loadStoreSuccess({ storeinformations: items })),
                catchError(err => of(StoreCollectionApiActions
                    .loadStoreFailure({ errorMsg: err.message })))
            )))
    );
    removes$ = createEffect(() => this.action$.pipe(
        ofType(StoresApiActions.removeStore),
        switchMap(({ id }) => {
            if (id <= 0) {
                return empty;
            }
            return this.storesService.removeStore(id).pipe(
                map((item: StoreInformation) => StoreCollectionApiActions
                    .removeStoreSuccess({ id: item ? item.id : 0 })),
                catchError(error => of(StoreCollectionApiActions
                    .removeStoreFailure({ errorMsg: error.message })))
            );
        })
    ));
    update$ = createEffect(() => this.action$.pipe(
        ofType(StoresApiActions.updateStore),
        switchMap(({ update }) =>
            this.storesService.updateStore(update.changes).pipe(
                map(item => StoreCollectionApiActions
                    .updateStoreSuccess(
                    )),
                catchError(error => of(StoreCollectionApiActions
                    .updateStoreFailure({ errorMsg: error.message })))
            ))
    ));
    adds$ = createEffect(() => this.action$.pipe(
        ofType(StoresApiActions.addStore),
        switchMap(({ storeinformation }) =>
            this.storesService.addStore(storeinformation)
                .pipe(
                    map((item: StoreInformation) => StoreCollectionApiActions
                        .addStoreSuccess({
                            storeinformation: item
                        }
                        )),
                    catchError(error => of(StoreCollectionApiActions
                        .addStoreFailure({ errorMsg: error.message })))
                ))
    ));
    constructor(
        private action$: Actions,
        private storesService: StoresService,
    ) { }
}
