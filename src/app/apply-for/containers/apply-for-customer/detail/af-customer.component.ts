import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { ApplyForCustomer } from '@app/@core/data';
import { ApplyForCustomerApiActions } from '@app/apply-for/actions';
import { ApplyForCustomerSelectors } from '@app/apply-for/selectors';

@Component({
    template: `
        <ngx-customer-detail [applyForCustomer]="applyForCustomer$ | async"></ngx-customer-detail>
    `
})

export class CustomerDetailComponent implements OnInit {
    applyForCustomer$;
    id$: number;

    @Input() applyForCustomer: ApplyForCustomer;
    constructor(
        private router: ActivatedRoute,
        private store: Store<ApplyForCustomer>,
    ) {
        this.id$ = +this.router.snapshot.params.id;
        this.applyForCustomer$ = this.store.pipe(select(ApplyForCustomerSelectors
            .selectCurrentApplyForCustomer(this.id$)));
    }
    ngOnInit() {
        this.store.dispatch(ApplyForCustomerApiActions.getApplyForCustomers());
    }

}
