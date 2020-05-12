import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { NbDialogRef } from '@nebular/theme';
import { SalesTeam } from '@app/@core/data/salesteam';
import { SalesTeamsActions } from '@app/salesteam/actions';

@Component({
  selector: 'ngx-salesteam-delete',
  templateUrl: './salesteam-delete.component.html',
  styles: [
    `@include nb-install-component() {
        input {
          width: 100%;
          margin-bottom: 20px;
        }
      }
    button[nbButton]{
      display: block;
      float: right;
      margin-left: 15px;
    }`]
})
export class SalesTeamDeleteComponent implements OnInit {
  public deleteSalesTeamForm: FormGroup;
  public salesteam: SalesTeam;
  constructor(
    private fb: FormBuilder,
    private store: Store<SalesTeam>,
    private dialogRef: NbDialogRef<SalesTeamDeleteComponent>
  ) { }

  ngOnInit() {
    this.createForm();
  }
  createForm = () => {
    this.deleteSalesTeamForm = this.fb.group({
      salesTeamCode: [this.salesteam ? this.salesteam.salesTeamCode : '', Validators.required],
      salesTeamName: [this.salesteam ? this.salesteam.salesTeamName : '', Validators.required],
      salesTeamType: [this.salesteam ? this.salesteam.salesTeamType : '', Validators.required],
      channelCode: [this.salesteam ? this.salesteam.channelCode : '', Validators.required],
      channelName: [this.salesteam ? this.salesteam.channelName : '', Validators.required],
      companyCode: [this.salesteam ? this.salesteam.companyCode : '', Validators.required],
      customerCode: [this.salesteam ? this.salesteam.customerCode : '', Validators.required],
      status: [this.salesteam ? this.salesteam.status : '', Validators.required],
      remark: [this.salesteam ? this.salesteam.remark : '', Validators.required],
      deleted: [this.salesteam ? this.salesteam.deleted : '', Validators.required],
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
    this.store.dispatch(SalesTeamsActions.removeSalesTeam({ update: update }));
    this.close();
  }
}
