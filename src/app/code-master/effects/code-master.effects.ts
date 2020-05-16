import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { CodeMasterService } from '../services/code-master.service';
import { CodeMaster } from '@appdata';
import { of, EMPTY as empty } from 'rxjs';
import { Update } from '@ngrx/entity';
import { CodeMasterActions, CodeMasterApiActions } from '../actions';

@Injectable()
export class CodeMasterEffects {
    codeMasters$ = createEffect(() => this.action$.pipe(
        ofType(CodeMasterActions.getCodeMasters),
        mergeMap(() => this.codeMasterService.getCodeMasters()
            .pipe(
                map((items: CodeMaster[]) => CodeMasterApiActions
                    .loadCodeMasterSuccess({ codeMasters: items })),
                catchError(error => of(CodeMasterApiActions
                    .loadCodeMasterFailure({ errorMsg: error.message })))
            ))
    ));
    addCodeMaster$ = createEffect(() => this.action$.pipe(
        ofType(CodeMasterActions.addCodeMaster),
        switchMap(({ codeMaster }) =>
            this.codeMasterService.addCodeMaster(codeMaster).pipe(
                map((item: CodeMaster) => CodeMasterApiActions
                    .addCodeMasterSuccess({ codeMaster: item })),
                catchError(error => of(CodeMasterApiActions
                    .addCodeMasterFailure({ errorMsg: error.message })))
            ))
    ));
    updateCodeMaster$ = createEffect(() => this.action$.pipe(
        ofType(CodeMasterActions.updateCodeMaster),
        switchMap(({ update }) =>
            this.codeMasterService.update(update.changes).pipe(
                map(item => CodeMasterApiActions
                    .updateCodeMasterSuccess(
                        {
                            update: {
                                id: item.id,
                                changes: item
                            }
                        }
                    )),
                catchError(error => of(CodeMasterApiActions
                    .updateCodeMasterFailure({ errorMsg: error.message })))
            ))
    ));
    updateDelete$ = createEffect(() => this.action$.pipe(
        ofType(CodeMasterActions.updateDelete),
        switchMap(({ id }) => {
            if (id <= 0) {
                return empty;
            }
            return this.codeMasterService.updateDelete(id).pipe(
                map((item: CodeMaster) => CodeMasterApiActions
                    .updateDeleteSuccess({ id: item ? item.id : 0 })),
                catchError(error => of(CodeMasterApiActions
                    .updateDeleteFailure({ errorMsg: error.message })))
            );
        })
    ));
    updateDeletes$ = createEffect(() => this.action$.pipe(
        ofType(CodeMasterActions.updateDeletes),
        switchMap(({ ids }) => {
            if (ids === []) {
                return empty;
            }
            return this.codeMasterService.updateDeletes(ids).pipe(
                map((items: CodeMaster[]) => {
                    const ids: number[] = [];
                    items.forEach(item => ids.push(item.id));
                    return CodeMasterApiActions
                        .updateDeletesSuccess({ ids: ids });
                }),
                catchError(error => of(CodeMasterApiActions
                    .updateDeletesFailure({ errorMsg: error.message })))
            );
        })
    ));
    updateSystems$ = createEffect(() => this.action$.pipe(
        ofType(CodeMasterActions.updateSystems),
        switchMap(({ updates }) => {
            if (updates === []) {
                return empty;
            }
            const ids: number[] = [];
            updates.forEach(x => {
                ids.push(+x.id);
            });
            return this.codeMasterService.updateSystems(ids).pipe(
                map((items: CodeMaster[]) => {
                    const updates: Update<CodeMaster>[] = [];
                    items.forEach(item => updates.push(
                        {
                            id: item.id,
                            changes: item
                        }
                    ));
                    return CodeMasterApiActions
                        .updateSystemsSuccess({ updates: updates });
                }),
                catchError(error => of(CodeMasterApiActions
                    .updateSystemsFailure({ errorMsg: error.message })))
            );
        })
    ));
    constructor(
        private action$: Actions,
        private codeMasterService: CodeMasterService,
    ) { }
}
