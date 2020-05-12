import { Injectable } from '@angular/core';
import { WarehouseListActions, WarehouseListApiActions } from '../actions';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';
import { Warehouse } from '@appdata';
import { WarehouseStorageService } from '../services/warehouse-storage.service';

@Injectable()
export class ListEffects {
    loadList$ = createEffect(() =>
        this.actions$.pipe(
            ofType(WarehouseListActions.loadWarehouseList),
            switchMap(() =>
                this.storageService.getList().pipe(
                    map((warehouses: Warehouse[]) =>
                        WarehouseListApiActions.loadWarehousesSuccess({ warehouses }),
                        // console.log(`Load ${JSON.stringify(this.loadList$)}` )
                    ),
                    // catchError(error =>
                    //   of(WarehouseListApiActions.loadWarehousesFailure({ errorMsg })),
                    // ),
                ),
            ),
        ),
    );

    constructor(
        private actions$: Actions,
        private storageService: WarehouseStorageService,
    ) { }
}
