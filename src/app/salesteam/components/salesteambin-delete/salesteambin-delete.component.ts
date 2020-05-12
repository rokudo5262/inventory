import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { NbDialogRef } from '@nebular/theme';
import { SalesTeamBin } from '@app/@core/data/salesteambin';
import { SalesTeamBinsActions } from '@app/salesteam/actions';

@Component({
  selector: 'ngx-salesteambin-delete',
  templateUrl: './salesteambin-delete.component.html',
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
export class SalesTeamBinDeleteComponent implements OnInit {
  public deleteSalesTeamBinForm: FormGroup;
  public salesteambin: SalesTeamBin;
  constructor(
    private fb: FormBuilder,
    private store: Store<SalesTeamBin>,
    private dialogRef: NbDialogRef<SalesTeamBinDeleteComponent>
  ) { }

  ngOnInit() {
    this.createForm();
  }
  createForm = () => {
    this.deleteSalesTeamBinForm = this.fb.group({
      binCode: [this.salesteambin ? this.salesteambin.binCode : '', Validators.required],
      binName: [this.salesteambin ? this.salesteambin.binName : '', Validators.required],
      binType: [this.salesteambin ? this.salesteambin.binType : '', Validators.required],
      locationCode: [this.salesteambin ? this.salesteambin.locationCode : '', Validators.required],
      companyCode: [this.salesteambin ? this.salesteambin.companyCode : '', Validators.required],
      customerCode: [this.salesteambin ? this.salesteambin.customerCode : '', Validators.required],
      salesTeamCode: [this.salesteambin ? this.salesteambin.salesTeamCode : '', Validators.required],
      deleted: [this.salesteambin ? this.salesteambin.deleted : '', Validators.required],
    });

  }

  close() {
    this.dialogRef.close();
  }

  submit(item) {
    const update = {
      id: item.lineId,
      changes: item
    };
    this.store.dispatch(SalesTeamBinsActions.removeSalesTeamBin({ update: update }));
    this.close();
  }
}
