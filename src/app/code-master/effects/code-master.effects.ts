import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { CodeMasterApiActions, CodeMasterListApiActions } from '../actions';
import { CodeMasterService } from '../services/code-master.service';
import { CodeMaster } from '@appdata';
import { of, EMPTY as empty } from 'rxjs';
import { Update } from '@ngrx/entity';

@Injectable()
export class CodeMasterEffects {
    codeMasters$ = createEffect(() => this.action$.pipe(
        ofType(CodeMasterApiActions.getCodeMasters),
        mergeMap(() => this.codeMasterService.getCodeMasters()
            .pipe(
                map((items: CodeMaster[]) => CodeMasterListApiActions
                    .loadCodeMasterSuccess({ codeMasters: items })),
                catchError(error => of(CodeMasterListApiActions
                    .loadCodeMasterFailure({ errorMsg: error.message })))
            ))
    ));
    addCodeMaster$ = createEffect(() => this.action$.pipe(
        ofType(CodeMasterApiActions.addCodeMaster),
        switchMap(({ codeMaster }) =>
            this.codeMasterService.addCodeMaster(codeMaster).pipe(
                map((item: CodeMaster) => CodeMasterListApiActions
                    .addCodeMasterSuccess({ codeMaster: item })),
                catchError(error => of(CodeMasterListApiActions
                    .addCodeMasterFailure({ errorMsg: error.message })))
            ))
    ));
    updateCodeMaster$ = createEffect(() => this.action$.pipe(
        ofType(CodeMasterApiActions.updateCodeMaster),
        switchMap(({ update }) =>
            this.codeMasterService.update(update.changes).pipe(
                map(item => CodeMasterListApiActions
                    .updateCodeMasterSuccess(
                        {
                            update: {
                                id: item.id,
                                changes: item
                            }
                        }
                    )),
                catchError(error => of(CodeMasterListApiActions
                    .updateCodeMasterFailure({ errorMsg: error.message })))
            ))
    ));
    updateDelete$ = createEffect(() => this.action$.pipe(
        ofType(CodeMasterApiActions.updateDelete),
        switchMap(({ id }) => {
            if (id <= 0) {
                return empty;
            }
            return this.codeMasterService.updateDelete(id).pipe(
                map((item: CodeMaster) => CodeMasterListApiActions
                    .updateDeleteSuccess({ id: item ? item.id : 0 })),
                catchError(error => of(CodeMasterListApiActions
                    .updateDeleteFailure({ errorMsg: error.message })))
            );
        })
    ));
    updateDeletes$ = createEffect(() => this.action$.pipe(
        ofType(CodeMasterApiActions.updateDeletes),
        switchMap(({ ids }) => {
            if (ids === []) {
                return empty;
            }
            return this.codeMasterService.updateDeletes(ids).pipe(
                map((items: CodeMaster[]) => {
                    const ids: number[] = [];
                    items.forEach(item => ids.push(item.id));
                    return CodeMasterListApiActions
                        .updateDeletesSuccess({ ids: ids });
                }),
                catchError(error => of(CodeMasterListApiActions
                    .updateDeletesFailure({ errorMsg: error.message })))
            );
        })
    ));
    updateSystems$ = createEffect(() => this.action$.pipe(
        ofType(CodeMasterApiActions.updateSystems),
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
                    return CodeMasterListApiActions
                        .updateSystemsSuccess({ updates: updates });
                }),
                catchError(error => of(CodeMasterListApiActions
                    .updateSystemsFailure({ errorMsg: error.message })))
            );
        })
    ));
    constructor(
        private action$: Actions,
        private codeMasterService: CodeMasterService,
    ) { }
}
