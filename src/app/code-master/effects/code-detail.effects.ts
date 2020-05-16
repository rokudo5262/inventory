import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { of, EMPTY as empty } from 'rxjs';
import { CodeDetailService } from '../services/code-detail.service';
import { CodeDetail } from '@appdata';
import { CodeDetailActions, CodeDetailApiActions } from '../actions';

@Injectable()
export class CodeDetailEffects {
    codeDetails$ = createEffect(() => this.action$.pipe(
        ofType(CodeDetailActions.getCodeDetails),
        mergeMap(() => this.codeDetailService.getCodeDetails()
            .pipe(
                map((items: CodeDetail[]) => CodeDetailApiActions
                    .loadCodeDetailSuccess({ codeDetails: items })),
                catchError(error => of(CodeDetailApiActions
                    .loadCodeDetailFailure({ errorMsg: error.message })))
            )
        )
    ));
    addCodeDetail$ = createEffect(() => this.action$.pipe(
        ofType(CodeDetailActions.addCodeDetail),
        switchMap(({ codeDetail }) =>
            this.codeDetailService.addCodeDetail(codeDetail).pipe(
                map((item: CodeDetail) => CodeDetailApiActions
                    .addCodeDetailSuccess({ codeDetail: item })),
                catchError(error => of(CodeDetailApiActions
                    .addCodeDetailFailure({ errorMsg: error.message })))
            ))
    ));
    updateCodeDetail$ = createEffect(() => this.action$.pipe(
        ofType(CodeDetailActions.updateCodeDetail),
        switchMap(({ update }) =>
            this.codeDetailService.update(update.changes).pipe(
                map(item => CodeDetailApiActions
                    .updateCodeDetailSuccess()),
                catchError(error => of(CodeDetailApiActions
                    .updateCodeDetailFailure({ errorMsg: error.message })))
            ))
    ));
    updateDelete$ = createEffect(() => this.action$.pipe(
        ofType(CodeDetailActions.updateDelete),
        switchMap(({ id }) => {
            if (id <= 0) {
                return empty;
            }
            return this.codeDetailService.updateDelete(id).pipe(
                map((item: CodeDetail) => CodeDetailApiActions
                    .updateDeleteSuccess({ id: item ? item.id : 0 })),
                catchError(error => of(CodeDetailApiActions
                    .updateDeleteFailure({ errorMsg: error.message })))
            );
        })
    ));
    updateDeletes$ = createEffect(() => this.action$.pipe(
        ofType(CodeDetailActions.updateDeletes),
        switchMap(({ ids }) => {
            if (ids === []) {
                return empty;
            }
            return this.codeDetailService.updateDeletes(ids).pipe(
                map((items: CodeDetail[]) => {
                    const ids: number[] = [];
                    items.forEach(item => ids.push(item.id));
                    return CodeDetailApiActions
                        .updateDeletesSuccess({ ids: ids });
                }),
                catchError(error => of(CodeDetailApiActions
                    .updateDeletesFailure({ errorMsg: error.message })))
            );
        })
    ));
    getCodeDetail$ = createEffect(() => this.action$.pipe(
        ofType(CodeDetailActions.getCodeDetailsBaseoncodeMaster),
        switchMap(({ id }) =>
            this.codeDetailService.getCodeDetailsss(id).pipe(
                map((items: CodeDetail[]) => CodeDetailApiActions
                    .loadCodeDetailSuccess({ codeDetails: items })),
                catchError(error => of(CodeDetailApiActions
                    .loadCodeDetailFailure({ errorMsg: error.message })))
            )
        )
    ));
    constructor(
        private action$: Actions,
        private codeDetailService: CodeDetailService
    ) { }
}
