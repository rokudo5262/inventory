import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { LocationSelectors } from '../../selectors';
import { ILocation } from '@app/@core/data/location';
import { LocationsActions } from '@app/locations/actions';

@Component({
  selector: 'ngx-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.scss'],
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
    this.store.dispatch(LocationsActions.getLocations({ locations: [] }));
  }
}
