import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { EMPTY as empty, of } from 'rxjs';
import { StructureValueApiActions, StructureValueCollectionApiActions } from '../actions';
import { StructureValuesService } from '../services/structure-value.service';
import { StructureValue } from '@app/@core/data/structure-value';

@Injectable()
export class StructureValueEffects {
    structurevalues$ = createEffect(() => this.action$.pipe(
        ofType(StructureValueApiActions.getStructureValues),
        mergeMap(() => this.structurevalueService.getStructureValues()
            .pipe(
                map((items: StructureValue[]) => StructureValueCollectionApiActions
                    .loadStructureValuesSuccess({ structurevalues: items })),
                catchError(error => of(StructureValueCollectionApiActions
                    .loadStructureValuesFailure({ errorMsg: error.message })))
            ))
    )
    );
    create$ = createEffect(() => this.action$.pipe(
        ofType(StructureValueApiActions.addStructureValue),
        switchMap(({ structurevalue }) =>
            this.structurevalueService.addStructureValue(structurevalue).pipe(
                map((item: StructureValue) => StructureValueCollectionApiActions
                    .addStructureValueSuccess({
                        structurevalue: item
                    }
                    )),
                catchError(error => of(StructureValueCollectionApiActions
                    .addStructureValueFailure({ errorMsg: error.message })))
            ))
    ));
    update$ = createEffect(() => this.action$.pipe(
        ofType(StructureValueApiActions.updateStructureValue),
        switchMap(({ update }) =>
            this.structurevalueService.updateStructureValue(update.changes).pipe(
                map(item => StructureValueCollectionApiActions
                    .updateStructureValueSuccess()),
                catchError(error => of(StructureValueCollectionApiActions
                    .updateStructureValueFailure({ errorMsg: error.message })))
            ))
    ));
    delete$ = createEffect(() => this.action$.pipe(
        ofType(StructureValueApiActions.deleteStructureValue),
        switchMap(({ id }) => {
            if (id <= 0) {
                return empty;
            }
            return this.structurevalueService.deleteStructureValue(id).pipe(
                map((item: StructureValue) => StructureValueCollectionApiActions
                    .deleteStructureValueSuccess({ id: item ? item.id : 0 })),
                catchError(error => of(StructureValueCollectionApiActions
                    .deleteStructureValueFailure({ errorMsg: error.message })))
            );
        })
    ));
    deletes$ = createEffect(() => this.action$.pipe(
        ofType(StructureValueApiActions.deleteStructureValues),
        switchMap(({ ids }) => {
            if (ids === []) {
                return empty;
            }
            return this.structurevalueService.deleteStructureValues(ids).pipe(
                map((items: StructureValue[]) => {
                    const ids: number[] = [];
                    items.forEach(item => ids.push(item.id));
                    return StructureValueCollectionApiActions
                        .deletesStructureValueSuccess({ ids: ids });
                }),

                catchError(error => of(StructureValueCollectionApiActions
                    .deletesStructureValueFailure({ errorMsg: error.message })))
            );
        })
    ));
    constructor(
        private action$: Actions,
        private structurevalueService: StructureValuesService
    ) { }
}
