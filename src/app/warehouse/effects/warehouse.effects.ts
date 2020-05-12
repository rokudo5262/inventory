import { Injectable } from '@angular/core';
import { WarehousesApiActions, WarehouseListApiActions } from '../actions';
import { WarehousesService } from '../services/warehouse.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Warehouse } from '@appdata';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { of, empty } from 'rxjs';

@Injectable()
export class WarehouseEffects {
    warehouses$ = createEffect(() => this.action$.pipe(
        ofType(WarehousesApiActions.getWarehouses),
        mergeMap(() => this.warehousesService.getWarehouses()
            .pipe(
                map((items: Warehouse[]) => WarehouseListApiActions.loadWarehousesSuccess({ warehouses: items })),
                catchError(err => of(WarehouseListApiActions.loadWarehousesFailure({ errorMsg: err.message })))
            ))
    ));
    addWarehouse$ = createEffect(() => this.action$.pipe(
        ofType(WarehousesApiActions.addWarehouse),
        switchMap(({ warehouse }) =>
            this.warehousesService.addWarehouse(warehouse).pipe(
                map((item: Warehouse) => WarehouseListApiActions.addWarehouseSuccess({
                    warehouse: item
                }
                )),
                catchError(error => of(WarehouseListApiActions.addWarehouseFailure({ errorMsg: error.message })))
            ))
    ));
    removeWarehouse$ = createEffect(() => this.action$.pipe(
        ofType(WarehousesApiActions.removeWarehouse),
        switchMap(({ id }) => {
            if (id <= 0) {
                return empty;
            }
            return this.warehousesService.removeWarehouse(id).pipe(
                map((item: Warehouse) => WarehouseListApiActions.removeWarehouseSuccess({ id: item ? item.id : 0 })),
                catchError(err => of(WarehouseListApiActions.removeWarehouseFailure({ errorMsg: err.message })))
            );
        })
    ));
    update$ = createEffect(() => this.action$.pipe(
        ofType(WarehousesApiActions.updateWarehouse),
        switchMap(({ update }) =>
            this.warehousesService.updateWarehouse(update.changes).pipe(
                map(item => WarehouseListApiActions.updateWarehouseSuccess(
                )),
                catchError(error => of(WarehouseListApiActions.updateWarehouseFailure({ errorMsg: error.message })))
            ))
    ));
    constructor(
        private action$: Actions,
        private warehousesService: WarehousesService
    ) { }
}
