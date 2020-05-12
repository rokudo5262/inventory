import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { EMPTY as empty, of } from 'rxjs';
import { StructureApiActions, StructureCollectionApiActions } from '../actions';
import { StructuresService } from '../services/structures.services';
import { Structure } from '@app/@core/data/structure';

@Injectable()
export class StructureEffects {
    structures$ = createEffect(() => this.action$.pipe(
        ofType(StructureApiActions.getStructures),
        mergeMap(() => this.structureService.getStructures()
            .pipe(
                map((items: Structure[]) => StructureCollectionApiActions
                    .loadStructuresSuccess({ structures: items })
                ),
                catchError(error => of(StructureCollectionApiActions
                    .loadStructuresFailure({ errorMsg: error.message })
                ))
            ))
    ));
    create$ = createEffect(() => this.action$.pipe(
        ofType(StructureApiActions.addStructure),
        switchMap(({ structure }) =>
            this.structureService.addStructure(structure).pipe(
                map((item: Structure) => StructureCollectionApiActions
                    .addStructureSuccess({
                        structure: item
                    })
                ),
                catchError(error => of(StructureCollectionApiActions
                    .addStructureFailure({ errorMsg: error.message })
                ))
            ))
    ));
    edit$ = createEffect(() => this.action$.pipe(
        ofType(StructureApiActions.updateStructure),
        switchMap(({ update }) =>
            this.structureService.EditStructure(update.changes).pipe(
                map(item => StructureCollectionApiActions.updateStructureSuccess(
                )),
                catchError(error => of(StructureCollectionApiActions
                    .updateStructureFailure({ errorMsg: error.message })
                ))
            ))
    ));
    delete$ = createEffect(() => this.action$.pipe(
        ofType(StructureApiActions.deleteStructure),
        switchMap(({ id }) => {
            if (id <= 0) {
                return empty;
            }
            return this.structureService.deleteStructure(id).pipe(
                map((item: Structure) => StructureCollectionApiActions
                    .deleteStructureSuccess({ id: item ? item.id : 0 })),
                catchError(error => of(StructureCollectionApiActions
                    .deleteStructureFailure({ errorMsg: error.message })
                ))
            );
        })
    ));
    deletes$ = createEffect(() => this.action$.pipe(
        ofType(StructureApiActions.deleteStructures),
        switchMap(({ ids }) => {
            if (ids === []) {
                return empty;
            }
            return this.structureService.deletesStructure(ids).pipe(
                map((items: Structure[]) => {
                    const ids: number[] = [];
                    items.forEach(item => ids.push(item.id));
                    return StructureCollectionApiActions.deletesStructureSuccess({ ids: ids });
                }),
                catchError(error => of(StructureCollectionApiActions.
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
