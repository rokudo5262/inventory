import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { SecondaryCustomerApiActions, SecondaryCustomerCollectionApiActions } from '../actions';
import { mergeMap, map, catchError, switchMap } from 'rxjs/operators';
import { SecondaryCustomer } from '@app/@core/data/se-customer';
import { of, empty } from 'rxjs';
import { SecondaryCustomersService } from '../service/se-customer-list.service';
import { Update } from '@ngrx/entity';

@Injectable()
export class SecondaryCustomerEffects {
    secondarycustomers$ = createEffect(() => this.action$.pipe(
        ofType(SecondaryCustomerApiActions.getSECustomerLists),
        mergeMap(() => this.secondarycustomerService.getSecondaryCustomers()
            .pipe(
                map((items: SecondaryCustomer[]) => SecondaryCustomerCollectionApiActions
                    .loadSECustomerListSuccess({ secondarycustomers: items })
                ),
                catchError(error => of(SecondaryCustomerCollectionApiActions
                    .loadSECustomerListFailure({ errorMsg: error.message })
                ))
            ))
    ));
    create$ = createEffect(() => this.action$.pipe(
        ofType(SecondaryCustomerApiActions.addSECustomerList),
        switchMap(({ secondarycustomer }) =>
            this.secondarycustomerService.addSecondaryCustomer(secondarycustomer).pipe(
                map((item: SecondaryCustomer) => SecondaryCustomerCollectionApiActions
                    .addSECustomerListSuccess({
                        secondarycustomer: item
                    }
                    )),
                catchError(error => of(SecondaryCustomerCollectionApiActions
                    .addSECustomerListFailure({ errorMsg: error.message })
                ))
            ))
    ));
    edit$ = createEffect(() => this.action$.pipe(
        ofType(SecondaryCustomerApiActions.updateSECustomerList),
        switchMap(({ update }) =>
            this.secondarycustomerService.UpdateSecondaryCustomer(update.changes).pipe(
                map(item => SecondaryCustomerCollectionApiActions.updateSECustomerListSuccess({
                    update: {
                        id: item.id,
                        changes: item
                    }
                }
                )),
                catchError(error => of(SecondaryCustomerCollectionApiActions
                    .updateSECustomerListFailure({ errorMsg: error.message })
                ))
            ))
    ));
    delete$ = createEffect(() => this.action$.pipe(
        ofType(SecondaryCustomerApiActions.removeSECustomerList),
        switchMap(({ id }) => {
            if (id <= 0) {
                return empty;
            }
            return this.secondarycustomerService.deleteSecondaryCustomer(id).pipe(
                map((item: SecondaryCustomer) => SecondaryCustomerCollectionApiActions
                    .removeSECustomerListSuccess({ id: item ? item.id : 0 })
                ),
                catchError(error => of(SecondaryCustomerCollectionApiActions
                    .removeSECustomerListFailure({ errorMsg: error.message })
                ))
            );
        })
    ));
    deletes$ = createEffect(() => this.action$.pipe(
        ofType(SecondaryCustomerApiActions.removesSECustomerList),
        switchMap(({ ids }) => {
            if (ids === []) {
                return empty;
            }
            return this.secondarycustomerService.deletesSecondaryCustomer(ids).pipe(
                map((items: SecondaryCustomer[]) => {
                    const ids: number[] = [];
                    items.forEach(item => ids.push(item.id));
                    return SecondaryCustomerCollectionApiActions
                        .removesSECustomerListSuccess({ ids: ids });
                }),
                catchError(error => of(SecondaryCustomerCollectionApiActions
                    .removesSECustomerListFailure({ errorMsg: 'Only delete when status = new' })))
            );
        })
    ));
    Rejecteupdates$ = createEffect(() => this.action$.pipe(
        ofType(SecondaryCustomerApiActions.RejectedUpdateSECustomerList),
        switchMap(({ updates }) => {
            if (updates === []) {
                return empty;
            }
            const ids: number[] = [];
            updates.forEach(x => {
                ids.push(+x.id);
            });
            return this.secondarycustomerService.RejectedSecondaryCustomers(ids).pipe(
                map((items: SecondaryCustomer[]) => {
                    const updates: Update<SecondaryCustomer>[] = [];
                    items.forEach(item => updates.push(
                        {
                            id: item.id,
                            changes: item
                        }
                    ));
                    return SecondaryCustomerCollectionApiActions
                        .RejectesUpdateSECustomerListSuccess({
                            updates: updates
                        });
                }),
                catchError(error => of(SecondaryCustomerCollectionApiActions
                    .RejectedUpdateSECustomerListFailure({ errorMsg: error.message })))
            );
        })
    ));
    Approves$ = createEffect(() => this.action$.pipe(
        ofType(SecondaryCustomerApiActions.ApprovedSECustomerList),
        switchMap(({ updates }) => {
            if (updates === []) {
                return empty;
            }
            const ids: number[] = [];
            updates.forEach(x => {
                ids.push(+x.id);
            });
            return this.secondarycustomerService.ApprovedsSecondaryCustomer(ids).pipe(
                map((items: SecondaryCustomer[]) => {
                    const updates: Update<SecondaryCustomer>[] = [];
                    items.forEach(item => updates.push(
                        {
                            id: item.id,
                            changes: item
                        }
                    ));
                    return SecondaryCustomerCollectionApiActions
                        .ApprovedSECustomerListSuccess({
                            updates: updates
                        });
                }),
                catchError(error => of(SecondaryCustomerCollectionApiActions
                    .ApprovedSECustomerListFailure({ errorMsg: 'Only delete when status = new' })))
            );
        })
    ));
    ReOpens$ = createEffect(() => this.action$.pipe(
        ofType(SecondaryCustomerApiActions.ReOpenSECustomerList),
        switchMap(({ updates }) => {
            if (updates === []) {
                return empty;
            }
            const ids: number[] = [];
            updates.forEach(x => {
                ids.push(+x.id);
            });
            return this.secondarycustomerService.ReOpensSecondaryCustomer(ids).pipe(
                map((items: SecondaryCustomer[]) => {
                    const updates: Update<SecondaryCustomer>[] = [];
                    items.forEach(item => updates.push(
                        {
                            id: item.id,
                            changes: item
                        }
                    ));
                    return SecondaryCustomerCollectionApiActions
                        .ReOpenSECustomerListSuccess({updates: updates });
                }),
                catchError(error => of(SecondaryCustomerCollectionApiActions
                    .ReOpenSECustomerListFailure({ errorMsg: 'Only delete when status = new' })
                ))
            );
        })
    ));
    Deactivates$ = createEffect(() => this.action$.pipe(
        ofType(SecondaryCustomerApiActions.DeactivateSECustomerList),
        switchMap(({ updates }) => {
            if (updates === []) {
                return empty;
            }
            const ids: number[] = [];
            updates.forEach(x => {
                ids.push(+x.id);
            });
            return this.secondarycustomerService.DeactivatesSecondaryCustomer(ids).pipe(
                map((items: SecondaryCustomer[]) => {
                    const updates: Update<SecondaryCustomer>[] = [];
                    items.forEach(item => updates.push(
                        {
                            id: item.id,
                            changes: item
                        }
                    ));
                    return SecondaryCustomerCollectionApiActions
                        .DeactivateSECustomerListSuccess({
                            updates: updates
                        });
                }),
                catchError(error => of(SecondaryCustomerCollectionApiActions
                    .DeactivateSECustomerListFailure({ errorMsg: 'Only delete when status = new' })))
            );
        })
    ));
    constructor(
        private action$: Actions,
        private secondarycustomerService: SecondaryCustomersService,
    ) { }
}
