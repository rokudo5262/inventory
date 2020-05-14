import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import { LocationSelectors } from '../../selectors';
import { LocationsActions } from '../../actions';
import { ILocation } from '@app/@core/data/location';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngx-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.scss'],
})
export class LocationListComponent implements OnInit {
  settings = {
    hideSubHeader: true,
    mode: 'external',
    actions: { delete: false },
    edit: {
      editButtonContent: '<i class="nb-compose"></i>',
    },
    columns: {
      locationCode: {
        title: 'Depot Code',
        type: 'text',
      },
      locationName: {
        title: 'Depot Name',
        type: 'text',
      },
      phone: {
        title: 'Phone',
        type: 'text',
      },
      address: {
        title: 'Address',
        type: 'text',
      },
      locationType: {
        title: 'Depot Type',
        type: 'text',
      },
      source: {
        title: 'Type of Invoice used',
        type: 'text',
      },
      status: {
        title: 'Status',
        type: 'text',
      },
    },
  };
  locations$: Observable<ILocation[]>;
  dialogRef: any;
  constructor(
    private store: Store<ILocation>,
    private route: Router,
  ) {
    this.locations$ = this.store.pipe(select(LocationSelectors.selectAllLocations));
  }

  ngOnInit() {
    this.store.dispatch(LocationsActions.getLocations({ locations: [] }));
  }

  onCreate() {
    this.route.navigate(['dashboard/locations/location/add']);
  }

  onUserRowSelect(event) {
    this.route.navigate(['dashboard/locations/location', event.data.id]);
  }

  onEditConfirm(event) {
    this.store.dispatch(LocationsActions.updateLocation({
      update:
      {
        id: event.data.id,
        changes: event.newData
      }
    }));
    event.confirm.resolve();
  }
  onEdit(event) {
    this.route.navigate(['dashboard/locations/location', event.data.id]);
  }
}
