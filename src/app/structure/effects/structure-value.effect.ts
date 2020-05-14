import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { EMPTY as empty, of } from 'rxjs';
import { StructureValuesService } from '../services/structure-values.service';
import { StructureValue } from '@app/@core/data/structure-value';
import { StructureValuesActions, StructureValuesApiActions } from '../actions';

@Injectable()
export class StructureValueEffects {
    structurevalues$ = createEffect(() => this.action$.pipe(
        ofType(StructureValuesActions.getStructureValues),
        mergeMap(() => this.structurevalueService.getStructureValues()
            .pipe(
                map((items: StructureValue[]) => StructureValuesApiActions
                    .loadStructureValuesSuccess({ structurevalues: items })),
                catchError(error => of(StructureValuesApiActions
                    .loadStructureValuesFailure({ errorMsg: error.message })))
            ))
    )
    );
    create$ = createEffect(() => this.action$.pipe(
        ofType(StructureValuesActions.addStructureValue),
        switchMap(({ structurevalue }) =>
            this.structurevalueService.addStructureValue(structurevalue).pipe(
                map((item: StructureValue) => StructureValuesApiActions
                    .addStructureValueSuccess({ structurevalue: item })),
                catchError(error => of(StructureValuesApiActions
                    .addStructureValueFailure({ errorMsg: error.message })))
            ))
    ));
    update$ = createEffect(() => this.action$.pipe(
        ofType(StructureValuesActions.updateStructureValue),
        switchMap(({ update }) =>
            this.structurevalueService.updateStructureValue(update.changes).pipe(
                map(item => StructureValuesApiActions
                    .updateStructureValueSuccess()),
                catchError(error => of(StructureValuesApiActions
                    .updateStructureValueFailure({ errorMsg: error.message })))
            ))
    ));
    delete$ = createEffect(() => this.action$.pipe(
        ofType(StructureValuesActions.deleteStructureValue),
        switchMap(({ id }) => {
            if (id <= 0) {
                return empty;
            }
            return this.structurevalueService.deleteStructureValue(id).pipe(
                map((item: StructureValue) => StructureValuesApiActions
                    .deleteStructureValueSuccess({ id: item ? item.id : 0 })),
                catchError(error => of(StructureValuesApiActions
                    .deleteStructureValueFailure({ errorMsg: error.message })))
            );
        })
    ));
    deletes$ = createEffect(() => this.action$.pipe(
        ofType(StructureValuesActions.deleteStructureValues),
        switchMap(({ ids }) => {
            if (ids === []) {
                return empty;
            }
            return this.structurevalueService.deleteStructureValues(ids).pipe(
                map((items: StructureValue[]) => {
                    const ids: number[] = [];
                    items.forEach(item => ids.push(item.id));
                    return StructureValuesApiActions
                        .deletesStructureValueSuccess({ ids: ids });
                }),
                catchError(error => of(StructureValuesApiActions
                    .deletesStructureValueFailure({ errorMsg: error.message })))
            );
        })
    ));
    constructor(
        private action$: Actions,
        private structurevalueService: StructureValuesService
    ) { }
}
