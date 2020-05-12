import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { ApplyForSecondaryCustomer } from '@app/@core/data';
import { ApplyForSecondaryCustomerSelectors } from '@app/apply-for/selectors';
import { ApplyForSecondaryCustomerApiActions } from '@app/apply-for/actions';

@Component({
    template: `
        <ngx-secondary-detail [applyForSecondaryCustomer]="applyForSecondaryCustomer$ | async">
        </ngx-secondary-detail>
    `
})

export class SecondaryDetailComponent implements OnInit {
    applyForSecondaryCustomer$;
    id$: number;

    @Input() applyForSecondaryCustomer: ApplyForSecondaryCustomer;
    constructor(
        private router: ActivatedRoute,
        private store: Store<ApplyForSecondaryCustomer>,
    ) {
        this.id$ = +this.router.snapshot.params.id;
        this.applyForSecondaryCustomer$ = this.store.pipe(select(ApplyForSecondaryCustomerSelectors
            .selectCurrentApplyForSecondaryCustomer(this.id$)));
    }

    ngOnInit() {
        this.store.dispatch(ApplyForSecondaryCustomerApiActions.getApplyForSecondaryCustomers());
    }

}
