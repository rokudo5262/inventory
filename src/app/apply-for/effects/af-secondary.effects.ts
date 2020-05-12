import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { ApplyForSecondaryCustomer } from '@appdata';
import { of, EMPTY as empty } from 'rxjs';
import { ApplyForSecondaryCustomerService } from '../services/af-secondary.service';
import { ApplyForSecondaryCustomerApiActions, ApplyForSecondaryCustomerListApiActions } from '../actions';

@Injectable()
export class ApplyForSecondaryCustomerEffects {
    applyForSecondaryCustomers$ = createEffect(() => this.action$.pipe(
        ofType(ApplyForSecondaryCustomerApiActions.getApplyForSecondaryCustomers),
        mergeMap(() => this.applyForSecondaryCustomerService.getApplyForSecondaryCustomers()
            .pipe(
                map((items: ApplyForSecondaryCustomer[]) => ApplyForSecondaryCustomerListApiActions
                    .loadApplyForSecondaryCustomerSuccess({ applyForSecondaryCustomers: items })),
                catchError(error => of(ApplyForSecondaryCustomerListApiActions
                    .loadApplyForSecondaryCustomerFailure({ errorMsg: error.message })))
            ))
    ));

    applyForSecondaryCustomer$ = createEffect(() => this.action$.pipe(
        ofType(ApplyForSecondaryCustomerApiActions.getApplyForSecondaryCustomer),
        mergeMap(() => this.applyForSecondaryCustomerService.getApplyForSecondaryCustomer()
            .pipe(
                map((item: ApplyForSecondaryCustomer) => ApplyForSecondaryCustomerListApiActions
                    .loadSelectedApplyForSecondaryCustomerSuccess({ applyForSecondaryCustomer: item })),
                catchError(error => of(ApplyForSecondaryCustomerListApiActions
                    .loadSelectedApplyForSecondaryCustomerFailure({ errorMsg: error.message })))
            ))
    ));

    addApplyForSecondaryCustomer$ = createEffect(() => this.action$.pipe(
        ofType(ApplyForSecondaryCustomerApiActions.addApplyForSecondaryCustomer),
        switchMap(({ applyForSecondaryCustomer }) =>
            this.applyForSecondaryCustomerService.addApplyForSecondaryCustomer(applyForSecondaryCustomer).pipe(
                map((item: ApplyForSecondaryCustomer) => ApplyForSecondaryCustomerListApiActions
                    .addApplyForSecondaryCustomerSuccess({ applyForSecondaryCustomer: item })),
                catchError(error => of(ApplyForSecondaryCustomerListApiActions
                    .addApplyForSecondaryCustomerFailure({ errorMsg: error.message })))
            ))
    ));
    updateApplyForSecondaryCustomer$ = createEffect(() => this.action$.pipe(
        ofType(ApplyForSecondaryCustomerApiActions.updateApplyForSecondaryCustomer),
        switchMap(({ update }) =>
            this.applyForSecondaryCustomerService.update(update.changes).pipe(
                map(item => ApplyForSecondaryCustomerListApiActions
                    .updateApplyForSecondaryCustomerSuccess()),
                catchError(error => of(ApplyForSecondaryCustomerListApiActions
                    .updateApplyForSecondaryCustomerFailure({ errorMsg: error.message })))
            ))
    ));
    updateDelete$ = createEffect(() => this.action$.pipe(
        ofType(ApplyForSecondaryCustomerApiActions.updateDelete),
        switchMap(({ id }) => {
            if (id <= 0) {
                return empty;
            }
            return this.applyForSecondaryCustomerService.updateDelete(id).pipe(
                map((item: ApplyForSecondaryCustomer) => ApplyForSecondaryCustomerListApiActions
                    .updateDeleteSuccess({ id: item ? item.id : 0 })),
                catchError(error => of(ApplyForSecondaryCustomerListApiActions
                    .updateDeleteFailure({ errorMsg: error.message })))
            );
        })
    ));
    updateDeletes$ = createEffect(() => this.action$.pipe(
        ofType(ApplyForSecondaryCustomerApiActions.updateDeletes),
        switchMap(({ ids }) => {
            if (ids === []) {
                return empty;
            }
            return this.applyForSecondaryCustomerService.updateDeletes(ids).pipe(
                map((items: ApplyForSecondaryCustomer[]) => {
                    const ids: number[] = [];
                    items.forEach(item => ids.push(item.id));
                    return ApplyForSecondaryCustomerListApiActions
                        .updateDeletesSuccess({ ids: ids });
                }),
                catchError(error => of(ApplyForSecondaryCustomerListApiActions
                    .updateDeletesFailure({ errorMsg: error.message })))
            );
        })
    ));
    constructor(
        private action$: Actions,
        private applyForSecondaryCustomerService: ApplyForSecondaryCustomerService,
    ) { }
}
