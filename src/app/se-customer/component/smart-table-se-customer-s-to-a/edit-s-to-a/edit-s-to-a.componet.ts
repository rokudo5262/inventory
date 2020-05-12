import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { SecondaryCustomerShipToAddress } from '@app/@core/data/se-customer-S-to-A';
import { SecondaryCustomerShipToAddressSelectors } from '@app/se-customer/selectors';
import { SecondaryCustomerShipToAddressApiActions } from '@app/se-customer/actions';

@Component({
  templateUrl: './edit-s-to-a.componet.html',
})
export class SecondaryCustomerShipToAddressDetailComponent implements OnInit {
  secustomerstoa$;
  id$: number;
  constructor(
    private router: ActivatedRoute,
    private store: Store<SecondaryCustomerShipToAddress>
  ) {
    this.id$ = +this.router.snapshot.params.id;
    this.secustomerstoa$ = this.store.pipe(select(SecondaryCustomerShipToAddressSelectors
      .selectCurrentSecondaryCustomerShipToAddress(this.id$)));
  }
  ngOnInit() {
    this.store.dispatch(SecondaryCustomerShipToAddressApiActions.getSECustomerStoAs({ secustomerstoas: [] }));
  }
}
