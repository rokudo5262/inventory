import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ILocation } from '@appdata';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { LocationsActions } from '@app/locations/actions';
import { LocationUpdateComponent } from '../location-update/location-update.component';
import { NbDialogService } from '@nebular/theme';

@Component({
  selector: 'ngx-location-preview',
  templateUrl: './location-preview.component.html',
  styleUrls: ['./location-preview.component.scss'],
})
export class LocationPreviewComponent implements OnInit {
  public addLocationForm: FormGroup;
  @Input() location: ILocation;
  @Input() editor: boolean;
  constructor(
    private fb: FormBuilder,
    private store: Store<ILocation>,
    private dialogService: NbDialogService,
    private route: Router,
  ) { }
  ngOnInit() {
    this.createForm();
  }
  createForm = () => {
    this.addLocationForm = this.fb.group({
      companyCode: [this.location ? this.location.companyCode : '1', Validators.required],
      customerCode: [this.location ? this.location.customerCode : '1', Validators.required],
      locationCode: [this.location ? this.location.locationCode : '', Validators.required],
      locationType: [this.location ? this.location.locationType : '', Validators.required],
      locationName: [this.location ? this.location.locationName : '', Validators.required],
      phone: [this.location ? this.location.phone : '', Validators.required],
      address: [this.location ? this.location.address : '', Validators.required],
      remark: [this.location ? this.location.remark : '', Validators.required],
      status: [this.location ? this.location.status : '', Validators.required],
      salesRegionL1: [this.location ? this.location.salesRegionL1 : '', Validators.required],
      salesRegionL2: [this.location ? this.location.salesRegionL2 : '', Validators.required],
      salesRegionL3: [this.location ? this.location.salesRegionL3 : '', Validators.required],
      salesRegionL4: [this.location ? this.location.salesRegionL4 : '', Validators.required],
      salesRegionL1name: [this.location ? this.location.salesRegionL1name : '', Validators.required],
      salesRegionL2name: [this.location ? this.location.salesRegionL2name : '', Validators.required],
      salesRegionL3name: [this.location ? this.location.salesRegionL3name : '', Validators.required],
      salesRegionL4name: [this.location ? this.location.salesRegionL4name : '', Validators.required],
      source: [this.location ? this.location.source : '', Validators.required],
      createdBy: [this.location ? this.location.createdBy : '1', Validators.required],
      lastUpdatedBy: [this.location ? this.location.lastUpdatedBy : '1', Validators.required],
      deleted: [this.location ? this.location.deleted : false, Validators.required],
      block: [this.location ? this.location.block : false, Validators.required],
      id: [this.location ? this.location.id : 0, Validators.required],
      rowVersion: [this.location ? this.location.rowVersion : [], Validators.required],
      createdDateTime: [this.location ? this.location.createdDateTime : '', Validators.required],
    });
  }
  submit(item) {
    if (item.id === 0) {
      this.store.dispatch(LocationsActions.addLocation({ location: item }));
    } else {
      this.store.dispatch(LocationsActions.updateLocation({
        update:
        {
          id: item.id,
          changes: item
        }
      }));
    }
    this.back();
  }
  delete(item) {
    this.store.dispatch(LocationsActions.removeLocation({ id: item.id }));
    this.back();
  }
  edit() {
    this.dialogService.open(LocationUpdateComponent, {
      context: {
        location: this.location
      }
    });
  }
  back() {
    this.route.navigate(['dashboard/locations/library']);
  }
}
