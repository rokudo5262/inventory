import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { UomsService } from '../services/uoms.service';
import { UomsApiActions, UomCollectionApiActions } from '../actions';
import { mergeMap, map, catchError, switchMap } from 'rxjs/operators';
import { UOM } from '@app/@core/data';
import { of, EMPTY as empty } from 'rxjs';

@Injectable()
export class UomEffects {
    uoms$ = createEffect(() => this.action$.pipe(
        ofType(UomsApiActions.getUoms),
        mergeMap(() => this.uomService.getUoms().pipe(
            map((items: UOM[]) => UomCollectionApiActions
                .loadUomsSuccess({ uoms: items })),
            catchError(error => of(UomCollectionApiActions
                .loadUomsFailure({ errorMsg: error.message })))
        ))
    ));
    create$ = createEffect(() => this.action$.pipe(
        ofType(UomsApiActions.addUom),
        switchMap(({ uom }) => this.uomService.addUom(uom).pipe(
            map((item: UOM) => UomCollectionApiActions
                .addUomSuccess({ uom: item })),
            catchError(error => of(UomCollectionApiActions
                .addUomFailure({ errorMsg: error.message })))
        ))
    ));
    update$ = createEffect(() => this.action$.pipe(
        ofType(UomsApiActions.updateUom),
        switchMap(({ update }) => this.uomService.updateUom(update.changes).pipe(
            map(item => UomCollectionApiActions
                .updateUomSuccess()),
            catchError(error => of(UomCollectionApiActions
                .updateUomFailure({ errorMsg: error.message })))
        ))
    ));
    // remove$ = createEffect(() => this.action$.pipe(
    //     ofType(UomsApiActions.removeUom),
    //     switchMap(({ id }) => {
    //         if(id <= 0){
    //             return empty;
    //         }
    //         return this.uomService.removeUom(id).pipe(
    //             map((item: UOM) => UomCollectionApiActions.removeUomSuccess({ id: item?item.id:0 })),
    //             catchError(error => of(UomCollectionApiActions.removeUomFailure({ errorMsg: error.message })))
    //         );
    //     })
    // ))
    uom$ = createEffect(() => this.action$.pipe(
        ofType(UomsApiActions.getUom),
        mergeMap(() => this.uomService.getUom().pipe(
            map((item: UOM) => UomCollectionApiActions
                .loadSelectedUomSuccess({ uom: item })),
            catchError(error => of(UomCollectionApiActions
                .loadSelectedUomFailure({ errorMsg: error.message })))
        ))
    ));
    updateDelete$ = createEffect(() => this.action$.pipe(
        ofType(UomsApiActions.updateDelete),
        switchMap(({ id }) => {
            if (id <= 0) {
                return empty;
            }
            return this.uomService.updateDelete(id).pipe(
                map((item: UOM) => UomCollectionApiActions
                    .updateDeleteSuccess({ id: item ? item.id : 0 })),
                catchError(error => of(UomCollectionApiActions
                    .updateDeleteFailure({ errorMsg: error.message })))
            );
        })
    ));
    updateDeletes$ = createEffect(() => this.action$.pipe(
        ofType(UomsApiActions.updateDeletes),
        switchMap(({ ids }) => {
            if (ids <= []) {
                return empty;
            }
            return this.uomService.updateDeletes(ids).pipe(
                map((item: UOM) => UomCollectionApiActions
                    .updateDeletesSuccess({ ids: [item ? item.id : 0] })),
                catchError(error => of(UomCollectionApiActions
                    .updateDeletesFailure({ errorMsg: error.message })))
            );
        })
    ));
    constructor(
        private action$: Actions,
        private uomService: UomsService,
    ) { }
}
