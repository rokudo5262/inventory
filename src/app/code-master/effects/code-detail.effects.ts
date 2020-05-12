import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { of, EMPTY as empty } from 'rxjs';
import { CodeDetailService } from '../services/code-detail.service';
import { CodeDetailApiActions, CodeDetailListApiActions } from '../actions';
import { CodeDetail } from '@appdata';

@Injectable()
export class CodeDetailEffects {
    codeDetails$ = createEffect(() => this.action$.pipe(
        ofType(CodeDetailApiActions.getCodeDetails),
        mergeMap(() => this.codeDetailService.getCodeDetails()
            .pipe(
                map((items: CodeDetail[]) => CodeDetailListApiActions
                    .loadCodeDetailSuccess({ codeDetails: items })),
                catchError(error => of(CodeDetailListApiActions
                    .loadCodeDetailFailure({ errorMsg: error.message })))
            )
        )
    ));
    addCodeDetail$ = createEffect(() => this.action$.pipe(
        ofType(CodeDetailApiActions.addCodeDetail),
        switchMap(({ codeDetail }) =>
            this.codeDetailService.addCodeDetail(codeDetail).pipe(
                map((item: CodeDetail) => CodeDetailListApiActions
                    .addCodeDetailSuccess({ codeDetail: item })),
                catchError(error => of(CodeDetailListApiActions
                    .addCodeDetailFailure({ errorMsg: error.message })))
            ))
    ));
    updateCodeDetail$ = createEffect(() => this.action$.pipe(
        ofType(CodeDetailApiActions.updateCodeDetail),
        switchMap(({ update }) =>
            this.codeDetailService.update(update.changes).pipe(
                map(item => CodeDetailListApiActions
                    .updateCodeDetailSuccess()),
                catchError(error => of(CodeDetailListApiActions
                    .updateCodeDetailFailure({ errorMsg: error.message })))
            ))
    ));
    updateDelete$ = createEffect(() => this.action$.pipe(
        ofType(CodeDetailApiActions.updateDelete),
        switchMap(({ id }) => {
            if (id <= 0) {
                return empty;
            }
            return this.codeDetailService.updateDelete(id).pipe(
                map((item: CodeDetail) => CodeDetailListApiActions
                    .updateDeleteSuccess({ id: item ? item.id : 0 })),
                catchError(error => of(CodeDetailListApiActions
                    .updateDeleteFailure({ errorMsg: error.message })))
            );
        })
    ));
    updateDeletes$ = createEffect(() => this.action$.pipe(
        ofType(CodeDetailApiActions.updateDeletes),
        switchMap(({ ids }) => {
            if (ids === []) {
                return empty;
            }
            return this.codeDetailService.updateDeletes(ids).pipe(
                map((items: CodeDetail[]) => {
                    const ids: number[] = [];
                    items.forEach(item => ids.push(item.id));
                    return CodeDetailListApiActions
                        .updateDeletesSuccess({ ids: ids });
                }),
                catchError(error => of(CodeDetailListApiActions
                    .updateDeletesFailure({ errorMsg: error.message })))
            );
        })
    ));
    getCodeDetail$ = createEffect(() => this.action$.pipe(
        ofType(CodeDetailApiActions.getCodeDetailsBaseoncodeMaster),
        switchMap(({ id }) =>
            this.codeDetailService.getCodeDetailsss(id).pipe(
                map((items: CodeDetail[]) => CodeDetailListApiActions
                    .loadCodeDetailSuccess({ codeDetails: items })),
                catchError(error => of(CodeDetailListApiActions
                    .loadCodeDetailFailure({ errorMsg: error.message })))
            )
        )
    ));
    constructor(
        private action$: Actions,
        private codeDetailService: CodeDetailService
    ) { }
}
