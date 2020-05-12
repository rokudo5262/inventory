import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { ApplyForCustomer } from '@appdata';
import { of, EMPTY as empty } from 'rxjs';
import { ApplyForCustomerService } from '../services/af-Customer.service';
import { ApplyForCustomerApiActions, ApplyForCustomerListApiActions } from '../actions';

@Injectable()
export class ApplyForCustomerEffects {
    applyForCustomers$ = createEffect(() => this.action$.pipe(
        ofType(ApplyForCustomerApiActions.getApplyForCustomers),
        mergeMap(() => this.applyForCustomerService.getApplyForCustomers()
            .pipe(
                map((items: ApplyForCustomer[]) => ApplyForCustomerListApiActions
                    .loadApplyForCustomerSuccess({ applyForCustomers: items })),
                catchError(error => of(ApplyForCustomerListApiActions
                    .loadApplyForCustomerFailure({ errorMsg: error.message })))
            )
        )
    ));
    applyForCustomer$ = createEffect(() => this.action$.pipe(
        ofType(ApplyForCustomerApiActions.getApplyForCustomer),
        mergeMap(() => this.applyForCustomerService.getApplyForCustomer()
            .pipe(
                map((item: ApplyForCustomer) => ApplyForCustomerListApiActions
                    .loadSelectedApplyForCustomerSuccess({ applyForCustomer: item })),
                catchError(error => of(ApplyForCustomerListApiActions
                    .loadSelectedApplyForCustomerFailure({ errorMsg: error.message })))
            )
        )
    ));
    addApplyForCustomer$ = createEffect(() => this.action$.pipe(
        ofType(ApplyForCustomerApiActions.addApplyForCustomer),
        switchMap(({ applyForCustomer }) =>
            this.applyForCustomerService.addApplyForCustomer(applyForCustomer).pipe(
                map((item: ApplyForCustomer) => ApplyForCustomerListApiActions
                    .addApplyForCustomerSuccess({ applyForCustomer: item })),
                catchError(error => of(ApplyForCustomerListApiActions
                    .addApplyForCustomerFailure({ errorMsg: error.message })))
            ))
    ));
    updateApplyForCustomer$ = createEffect(() => this.action$.pipe(
        ofType(ApplyForCustomerApiActions.updateApplyForCustomer),
        switchMap(({ update }) =>
            this.applyForCustomerService.update(update.changes).pipe(
                map(item => ApplyForCustomerListApiActions
                    .updateApplyForCustomerSuccess()),
                catchError(error => of(ApplyForCustomerListApiActions
                    .updateApplyForCustomerFailure({ errorMsg: error.message })))
            ))
    ));
    updateDelete$ = createEffect(() => this.action$.pipe(
        ofType(ApplyForCustomerApiActions.updateDelete),
        switchMap(({ id }) => {
            if (id <= 0) {
                return empty;
            }
            return this.applyForCustomerService.updateDelete(id).pipe(
                map((item: ApplyForCustomer) => ApplyForCustomerListApiActions
                    .updateDeleteSuccess({ id: item ? item.id : 0 })),
                catchError(error => of(ApplyForCustomerListApiActions
                    .updateDeleteFailure({ errorMsg: error.message })))
            );
        })
    ));
    updateDeletes$ = createEffect(() => this.action$.pipe(
        ofType(ApplyForCustomerApiActions.updateDeletes),
        switchMap(({ ids }) => {
            if (ids === []) {
                return empty;
            }
            return this.applyForCustomerService.updateDeletes(ids).pipe(
                map((items: ApplyForCustomer[]) => {
                    const ids: number[] = [];
                    items.forEach(item => ids.push(item.id));
                    return ApplyForCustomerListApiActions
                        .updateDeletesSuccess({ ids: ids });
                }),
                catchError(error => of(ApplyForCustomerListApiActions
                    .updateDeletesFailure({ errorMsg: error.message })))
            );
        })
    ));
    constructor(
        private action$: Actions,
        private applyForCustomerService: ApplyForCustomerService,
    ) { }
}
