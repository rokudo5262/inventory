import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { LocationSelectors } from '../../selectors';
import { ILocation } from '@app/@core/data/location';
import { LocationsApiActions } from '@app/locations/actions';

@Component({
  templateUrl: './location-detail.component.html',
})
export class LocationDetailComponent implements OnInit {
  location$;
  id$: number;
  constructor(
    private router: ActivatedRoute,
    private store: Store<ILocation>,
  ) {
    this.id$ = +this.router.snapshot.params.id;
    this.location$ = this.store.pipe(select(LocationSelectors.selectCurrentLocation(this.id$)));
  }
  ngOnInit() {
    this.store.dispatch(LocationsApiActions.getLocations({ locations: [] }));
  }
}
