import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ILocation } from '@appdata';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { LocationsActions } from '@app/locations/actions';

@Component({
  selector: 'ngx-location-add',
  templateUrl: './location-add.component.html',
  styleUrls: ['./location-add.component.scss'],
})
export class LocationAddComponent implements OnInit {
  public addLocationForm: FormGroup;
  @Input() location: ILocation;
  @Input() editor: boolean;
  constructor(
    private fb: FormBuilder,
    private store: Store<ILocation>,
    private route: Router,
  ) { }
  ngOnInit() {
    this.createForm();
  }
  createForm = () => {
    this.addLocationForm = this.fb.group({
      companyCode: ['1', Validators.required],
      customerCode: ['1', Validators.required],
      locationCode: ['', Validators.required],
      locationType: ['', Validators.required],
      locationName: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      remark: ['', Validators.required],
      status: ['', Validators.required],
      salesRegionL1: ['', Validators.required],
      salesRegionL2: ['', Validators.required],
      salesRegionL3: ['', Validators.required],
      salesRegionL4: ['', Validators.required],
      salesRegionL1name: ['', Validators.required],
      salesRegionL2name: ['', Validators.required],
      salesRegionL3name: ['', Validators.required],
      salesRegionL4name: ['', Validators.required],
      source: ['', Validators.required],
      createdBy: ['1', Validators.required],
      lastUpdatedBy: ['1', Validators.required],
      deleted: [false, Validators.required],
      block: [false, Validators.required],
      id: [0, Validators.required],
      rowVersion: [[], Validators.required],
      createdDateTime: ['', Validators.required],
    });
  }
  add(item) {
    this.store.dispatch(LocationsActions.addLocation({ location: item }));
    this.back();
  }
  back() {
    this.route.navigate(['dashboard/locations/library']);
  }
}
