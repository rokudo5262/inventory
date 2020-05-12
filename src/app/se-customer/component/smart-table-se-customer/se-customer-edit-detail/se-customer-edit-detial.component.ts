import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { SecondaryCustomer } from '@app/@core/data/se-customer';
import { SecondaryCustomerSelectors } from '@app/se-customer/selectors/se-customer-list.selectors';
import { SecondaryCustomerApiActions } from '@app/se-customer/actions';

@Component({
  templateUrl: './se-customer-edit-detail.component.html',

})
export class SecondaryCustomerDetailComponent implements OnInit {
  secondarycustomer$;
  id$: number;
  constructor(
    private route: Router,
    private router: ActivatedRoute,
    private store: Store<SecondaryCustomer>
  ) {
    this.id$ = +this.router.snapshot.params.id;
    this.secondarycustomer$ = this.store.pipe(select(SecondaryCustomerSelectors
      .selectCurrentSecondaryCustomer(this.id$)));
  }
  ngOnInit() {
    this.store.dispatch(SecondaryCustomerApiActions.getSECustomerLists({ secondarycustomers: [] }));
  }
  back() {
    this.route.navigate(['dashboard/se-customer']);
  }
  secondarycustomershiptoaddress() {
    this.route.navigate(['dashboard/se-customer/SecondaryCustomerShipToAddress']);
  }
}
