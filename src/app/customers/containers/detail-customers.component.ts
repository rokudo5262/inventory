import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Customer } from '@app/@core/data';
import { CustomerSelectors } from '../selectors';
import { CustomersActions } from '../actions';

@Component({
    template: `
    <nb-card>
        <nb-card-header>
            <h3>Customer Details</h3>
        </nb-card-header>
        <nb-card-body>
            <ngx-customers-detail [customer]="customer$ | async"></ngx-customers-detail>
        </nb-card-body>
    </nb-card>
    `,
})

export class DetailsCustomerComponent implements OnInit {
    customer$;
    id$: number;

    constructor(
        private router: ActivatedRoute,
        private store: Store<Customer>
    ) {
        this.id$ = +this.router.snapshot.params.id;
        this.customer$ = this.store.pipe(select(CustomerSelectors.selectCurrentCustomer(this.id$)));
    }

    ngOnInit() {
        this.store.dispatch(CustomersActions.getCustomers({ customers: [] }));
    }
}
