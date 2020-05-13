import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { NbDialogRef } from '@nebular/theme';
import { SalesTeam } from '@app/@core/data/salesteam';
import { SalesTeamsActions } from '@app/salesteam/actions';

@Component({
  selector: 'ngx-salesteam-update',
  templateUrl: './salesteam-update.component.html',
  styleUrls: ['./salesteam-update.component.scss'],
})
export class SalesTeamUpdateComponent implements OnInit {
  public updateSalesTeamForm: FormGroup;
  public salesteam: SalesTeam;
  constructor(
    private fb: FormBuilder,
    private store: Store<SalesTeam>,
    private dialogRef: NbDialogRef<SalesTeamUpdateComponent>
  ) { }

  ngOnInit() {
    this.createForm();
  }
  createForm = () => {
    this.updateSalesTeamForm = this.fb.group({
      salesTeamCode: [this.salesteam ? this.salesteam.salesTeamCode : '', Validators.required],
      salesTeamName: [this.salesteam ? this.salesteam.salesTeamName : '', Validators.required],
      salesTeamType: [this.salesteam ? this.salesteam.salesTeamType : '', Validators.required],
      channelCode: [this.salesteam ? this.salesteam.channelCode : '', Validators.required],
      channelName: [this.salesteam ? this.salesteam.channelName : '', Validators.required],
      companyCode: [this.salesteam ? this.salesteam.companyCode : '', Validators.required],
      customerCode: [this.salesteam ? this.salesteam.customerCode : '', Validators.required],
      locationCode: [this.salesteam ? this.salesteam.locationCode : '', Validators.required],
      locationName: [this.salesteam ? this.salesteam.locationName : '', Validators.required],
      salesForceCode: [this.salesteam ? this.salesteam.salesForceCode : '', Validators.required],
      salesForceL1: [this.salesteam ? this.salesteam.salesForceL1 : '', Validators.required],
      salesForceL2: [this.salesteam ? this.salesteam.salesForceL2 : '', Validators.required],
      salesForceL3: [this.salesteam ? this.salesteam.salesForceL3 : '', Validators.required],
      salesForceL4: [this.salesteam ? this.salesteam.salesForceL4 : '', Validators.required],
      salesForceL5: [this.salesteam ? this.salesteam.salesForceL5 : '', Validators.required],
      salesForceL6: [this.salesteam ? this.salesteam.salesForceL6 : '', Validators.required],
      source: [this.salesteam ? this.salesteam.source : '', Validators.required],
      status: [this.salesteam ? this.salesteam.status : '', Validators.required],
      remark: [this.salesteam ? this.salesteam.remark : '', Validators.required],
      createdBy: [this.salesteam ? this.salesteam.createdBy : '', Validators.required],
      lastUpdatedBy: [this.salesteam ? this.salesteam.lastUpdatedBy : '', Validators.required],
      // lastUpdatedDateTime: [this.salesteam ? this.salesteam.lastUpdatedDateTime : '', Validators.required],
      createdDateTime: [this.salesteam ? this.salesteam.createdDateTime : '', Validators.required],
    });
  }

  close() {
    this.dialogRef.close();
  }

  submit(item) {
    const update = {
      id: item.salesTeamCode,
      changes: item
    };
    this.store.dispatch(SalesTeamsActions.updateSalesTeam({ update: update }));
    this.close();
  }
}
