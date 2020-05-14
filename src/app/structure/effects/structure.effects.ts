import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { EMPTY as empty, of } from 'rxjs';
import { StructuresService } from '../services/structures.service';
import { Structure } from '@app/@core/data/structure';
import { StructuresActions, StructuresApiActions } from '../actions';

@Injectable()
export class StructureEffects {
    structures$ = createEffect(() => this.action$.pipe(
        ofType(StructuresActions.getStructures),
        mergeMap(() => this.structureService.getStructures()
            .pipe(
                map((items: Structure[]) => StructuresApiActions
                    .loadStructuresSuccess({ structures: items })
                ),
                catchError(error => of(StructuresApiActions
                    .loadStructuresFailure({ errorMsg: error.message })
                ))
            ))
    ));
    create$ = createEffect(() => this.action$.pipe(
        ofType(StructuresActions.addStructure),
        switchMap(({ structure }) =>
            this.structureService.addStructure(structure).pipe(
                map((item: Structure) => StructuresApiActions
                    .addStructureSuccess({
                        structure: item
                    })
                ),
                catchError(error => of(StructuresApiActions
                    .addStructureFailure({ errorMsg: error.message })
                ))
            ))
    ));
    edit$ = createEffect(() => this.action$.pipe(
        ofType(StructuresActions.updateStructure),
        switchMap(({ update }) =>
            this.structureService.EditStructure(update.changes).pipe(
                map(item => StructuresApiActions
                    .updateStructureSuccess()),
                catchError(error => of(StructuresApiActions
                    .updateStructureFailure({ errorMsg: error.message })
                ))
            ))
    ));
    delete$ = createEffect(() => this.action$.pipe(
        ofType(StructuresActions.deleteStructure),
        switchMap(({ id }) => {
            if (id <= 0) {
                return empty;
            }
            return this.structureService.deleteStructure(id).pipe(
                map((item: Structure) => StructuresApiActions
                    .deleteStructureSuccess({ id: item ? item.id : 0 })),
                catchError(error => of(StructuresApiActions
                    .deleteStructureFailure({ errorMsg: error.message })
                ))
            );
        })
    ));
    deletes$ = createEffect(() => this.action$.pipe(
        ofType(StructuresActions.deleteStructures),
        switchMap(({ ids }) => {
            if (ids === []) {
                return empty;
            }
            return this.structureService.deletesStructure(ids).pipe(
                map((items: Structure[]) => {
                    const ids: number[] = [];
                    items.forEach(item => ids.push(item.id));
                    return StructuresApiActions
                        .deletesStructureSuccess({ ids: ids });
                }),
                catchError(error => of(StructuresApiActions.
                    deletesStructureFailure({ errorMsg: error.message })
                ))
            );
        })
    ));
    constructor(
        private action$: Actions,
        private structureService: StructuresService
    ) { }
}
