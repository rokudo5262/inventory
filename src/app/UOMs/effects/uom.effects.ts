import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { UomsService } from '../services/uoms.service';
import { UomsApiActions, UomsActions } from '../actions';
import { mergeMap, map, catchError, switchMap } from 'rxjs/operators';
import { UOM } from '@app/@core/data';
import { of, EMPTY as empty } from 'rxjs';

@Injectable()
export class UomEffects {
    uoms$ = createEffect(() => this.action$.pipe(
        ofType(UomsActions.getUoms),
        mergeMap(() => this.uomService.getUoms().pipe(
            map((items: UOM[]) => UomsApiActions
                .loadUomsSuccess({ uoms: items })),
            catchError(error => of(UomsApiActions
                .loadUomsFailure({ errorMsg: error.message })))
        ))
    ));
    create$ = createEffect(() => this.action$.pipe(
        ofType(UomsActions.addUom),
        switchMap(({ uom }) => this.uomService.addUom(uom).pipe(
            map((item: UOM) => UomsApiActions
                .addUomSuccess({ uom: item })),
            catchError(error => of(UomsApiActions
                .addUomFailure({ errorMsg: error.message })))
        ))
    ));
    update$ = createEffect(() => this.action$.pipe(
        ofType(UomsActions.updateUom),
        switchMap(({ update }) => this.uomService.updateUom(update.changes).pipe(
            map(item => UomsApiActions
                .updateUomSuccess()),
            catchError(error => of(UomsApiActions
                .updateUomFailure({ errorMsg: error.message })))
        ))
    ));
    uom$ = createEffect(() => this.action$.pipe(
        ofType(UomsActions.getUom),
        mergeMap(() => this.uomService.getUom().pipe(
            map((item: UOM) => UomsApiActions
                .loadSelectedUomSuccess({ uom: item })),
            catchError(error => of(UomsApiActions
                .loadSelectedUomFailure({ errorMsg: error.message })))
        ))
    ));
    updateDelete$ = createEffect(() => this.action$.pipe(
        ofType(UomsActions.updateDelete),
        switchMap(({ id }) => {
            if (id <= 0) {
                return empty;
            }
            return this.uomService.updateDelete(id).pipe(
                map((item: UOM) => UomsApiActions
                    .updateDeleteSuccess({ id: item ? item.id : 0 })),
                catchError(error => of(UomsApiActions
                    .updateDeleteFailure({ errorMsg: error.message })))
            );
        })
    ));
    updateDeletes$ = createEffect(() => this.action$.pipe(
        ofType(UomsActions.updateDeletes),
        switchMap(({ ids }) => {
            if (ids <= []) {
                return empty;
            }
            return this.uomService.updateDeletes(ids).pipe(
                map((item: UOM) => UomsApiActions
                    .updateDeletesSuccess({ ids: [item ? item.id : 0] })),
                catchError(error => of(UomsApiActions
                    .updateDeletesFailure({ errorMsg: error.message })))
            );
        })
    ));
    constructor(
        private action$: Actions,
        private uomService: UomsService,
    ) { }
}
