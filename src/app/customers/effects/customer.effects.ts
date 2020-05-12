import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { CustomersApiActions, CustomerCollectionApiActions } from '../actions';
import { CustomersService } from '../services/customers.service';
import { Customer } from '@appdata/customer';
import { EMPTY as empty, of } from 'rxjs';

@Injectable()
export class CustomerEffects {
    customers$ = createEffect(() => this.action$.pipe(
        ofType(CustomersApiActions.getCustomers),
        mergeMap(() => this.customerService.getCustomers()
            .pipe(
                map((items: Customer[]) => CustomerCollectionApiActions
                    .loadCustomersSuccess({ customers: items })),
                catchError(error => of(CustomerCollectionApiActions
                    .loadCustomersFailure({ errorMsg: error.message })))
            ))
    ));
    remove$ = createEffect(() => this.action$.pipe(
        ofType(CustomersApiActions.removeCustomer),
        switchMap(({ id }) => {
            if (id <= 0) {
                return empty;
            }
            return this.customerService.removeCustomer(id).pipe(
                map((item: Customer) => CustomerCollectionApiActions
                    .removeCustomerSuccess({ id: item ? item.id : 0 })),
                catchError(error => of(CustomerCollectionApiActions
                    .removeCustomerFailure({ errorMsg: error.message })))
            );
        })
    ));
    update$ = createEffect(() => this.action$.pipe(
        ofType(CustomersApiActions.updateCustomer),
        switchMap(({ update }) =>
            this.customerService.updateCustomer(update.changes).pipe(
                map(item => CustomerCollectionApiActions
                    .updateCustomerSuccess()),
                catchError(error => of(CustomerCollectionApiActions
                    .updateCustomerFailure({ errorMsg: error.message })))
            ))
    ));
    create$ = createEffect(() => this.action$.pipe(
        ofType(CustomersApiActions.addCustomer),
        switchMap(({ customer }) =>
            this.customerService.addCustomer(customer).pipe(
                map((item: Customer) => CustomerCollectionApiActions
                    .addCustomerSuccess({ customer: item })),
                catchError(error => of(CustomerCollectionApiActions
                    .addCustomerFailure({ errorMsg: error.message })))
            ))
    ));
    constructor(
        private action$: Actions,
        private customerService: CustomersService,
    ) { }
}
