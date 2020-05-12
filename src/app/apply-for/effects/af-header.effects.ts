import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { ApplyForHeader } from '@appdata';
import { of, EMPTY as empty } from 'rxjs';
import { ApplyForHeaderService } from '../services/af-header.service';
import { ApplyForHeaderApiActions, ApplyForHeaderListApiActions } from '../actions';

@Injectable()
export class ApplyForHeaderEffects {
    applyForHeaders$ = createEffect(() => this.action$.pipe(
        ofType(ApplyForHeaderApiActions.getApplyForHeaders),
        mergeMap(() => this.applyForHeaderService.getApplyForHeaders()
            .pipe(
                map((items: ApplyForHeader[]) => ApplyForHeaderListApiActions
                    .loadApplyForHeaderSuccess({ applyForHeaders: items })),
                catchError(error => of(ApplyForHeaderListApiActions
                    .loadApplyForHeaderFailure({ errorMsg: error.message })))
            )
        )
    ));
    applyForHeader$ = createEffect(() => this.action$.pipe(
        ofType(ApplyForHeaderApiActions.getApplyForHeader),
        mergeMap(() => this.applyForHeaderService.getApplyForHeader()
            .pipe(
                map((item: ApplyForHeader) => ApplyForHeaderListApiActions
                    .loadSelectedApplyForHeaderSuccess({ applyForHeader: item })),
                catchError(error => of(ApplyForHeaderListApiActions
                    .loadSelectedApplyForHeaderFailure({ errorMsg: error.message })))
            ))
    ));
    addApplyForHeader$ = createEffect(() => this.action$.pipe(
        ofType(ApplyForHeaderApiActions.addApplyForHeader),
        switchMap(({ applyForHeader }) =>
            this.applyForHeaderService.addApplyForHeader(applyForHeader).pipe(
                map((item: ApplyForHeader) => ApplyForHeaderListApiActions
                    .addApplyForHeaderSuccess({ applyForHeader: item })),
                catchError(error => of(ApplyForHeaderListApiActions
                    .addApplyForHeaderFailure({ errorMsg: error.message })))
            ))
    ));
    updateApplyForHeader$ = createEffect(() => this.action$.pipe(
        ofType(ApplyForHeaderApiActions.updateApplyForHeader),
        switchMap(({ update }) =>
            this.applyForHeaderService.update(update.changes).pipe(
                map(item => ApplyForHeaderListApiActions
                    .updateApplyForHeaderSuccess()),
                catchError(error => of(ApplyForHeaderListApiActions
                    .updateApplyForHeaderFailure({ errorMsg: error.message })))
            ))
    ));
    updateDelete$ = createEffect(() => this.action$.pipe(
        ofType(ApplyForHeaderApiActions.updateDelete),
        switchMap(({ id }) => {
            if (id <= 0) {
                return empty;
            }
            return this.applyForHeaderService.updateDelete(id).pipe(
                map((item: ApplyForHeader) => ApplyForHeaderListApiActions.
                    updateDeleteSuccess({ id: item ? item.id : 0 })),
                catchError(error => of(ApplyForHeaderListApiActions
                    .updateDeleteFailure({ errorMsg: error.message }))
                ));
        })
    ));
    constructor(
        private action$: Actions,
        private applyForHeaderService: ApplyForHeaderService,
    ) { }
}
