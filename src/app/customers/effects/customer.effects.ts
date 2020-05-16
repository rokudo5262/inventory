import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { CustomersApiActions, CustomersActions } from '../actions';
import { CustomersService } from '../services/customers.service';
import { Customer } from '@appdata/customer';
import { EMPTY as empty, of } from 'rxjs';

@Injectable()
export class CustomerEffects {
    customers$ = createEffect(() => this.action$.pipe(
        ofType(CustomersActions.getCustomers),
        mergeMap(() => this.customerService.getCustomers()
            .pipe(
                map((items: Customer[]) => CustomersApiActions
                    .loadCustomersSuccess({ customers: items })),
                catchError(error => of(CustomersApiActions
                    .loadCustomersFailure({ errorMsg: error.message })))
            ))
    ));
    remove$ = createEffect(() => this.action$.pipe(
        ofType(CustomersActions.removeCustomer),
        switchMap(({ id }) => {
            if (id <= 0) {
                return empty;
            }
            return this.customerService.removeCustomer(id).pipe(
                map((item: Customer) => CustomersApiActions
                    .removeCustomerSuccess({ id: item ? item.id : 0 })),
                catchError(error => of(CustomersApiActions
                    .removeCustomerFailure({ errorMsg: error.message })))
            );
        })
    ));
    update$ = createEffect(() => this.action$.pipe(
        ofType(CustomersActions.updateCustomer),
        switchMap(({ update }) =>
            this.customerService.updateCustomer(update.changes).pipe(
                map(item => CustomersApiActions
                    .updateCustomerSuccess()),
                catchError(error => of(CustomersApiActions
                    .updateCustomerFailure({ errorMsg: error.message })))
            ))
    ));
    create$ = createEffect(() => this.action$.pipe(
        ofType(CustomersActions.addCustomer),
        switchMap(({ customer }) =>
            this.customerService.addCustomer(customer).pipe(
                map((item: Customer) => CustomersApiActions
                    .addCustomerSuccess({ customer: item })),
                catchError(error => of(CustomersApiActions
                    .addCustomerFailure({ errorMsg: error.message })))
            ))
    ));
    constructor(
        private action$: Actions,
        private customerService: CustomersService,
    ) { }
}
