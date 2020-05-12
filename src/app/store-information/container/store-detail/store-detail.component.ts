import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { StoreSelectors } from '@app/store-information/selectors';
import { StoreInformation } from '@app/@core/data/store';
import { StoresApiActions } from '@app/store-information/actions';

@Component({
  templateUrl: './store-detail.component.html',
})
export class StoreDetail1Component implements OnInit {
  storeinformation$;
  id$: number;
  constructor(
    private router: ActivatedRoute,
    private store: Store<StoreInformation>,
  ) {
    this.id$ = +this.router.snapshot.params.id;
    this.storeinformation$ = this.store.pipe(select(StoreSelectors.selectCurrentStore(this.id$)));
  }
  ngOnInit() {
    this.store.dispatch(StoresApiActions.getStores({ storeinformations: [] }));
  }
}
