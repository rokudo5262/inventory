import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { NbDialogRef } from '@nebular/theme';
import { SalesTeam } from '@app/@core/data/salesteam';
import { SalesTeamsActions } from '@app/salesteam/actions';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'ngx-salesteam-add',
  templateUrl: './salesteam-add.component.html',
  styleUrls: ['./salesteam-add.component.scss'],
})
export class SalesTeamAddComponent implements OnInit {
  public addSalesTeamForm: FormGroup;
  public salesteam: SalesTeam;
  @Output() response: EventEmitter<any> = new EventEmitter();
  constructor(
    private fb: FormBuilder,
    private store: Store<SalesTeam>,
    private dialogRef: NbDialogRef<SalesTeamAddComponent>
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm = () => {
    this.addSalesTeamForm = this.fb.group({
      salesTeamCode: [uuid(), Validators.required],
      salesTeamName: ['', Validators.required],
      salesTeamType: ['', Validators.required],
      channelCode: ['', Validators.required],
      channelName: ['', Validators.required],
      companyCode: ['', Validators.required],
      customerCode: ['', Validators.required],
      locationCode: ['', Validators.required],
      locationName: ['', Validators.required],
      salesForceCode: ['', Validators.required],
      salesForceL1: ['L1', Validators.required],
      salesForceL2: ['L2', Validators.required],
      salesForceL3: ['L3', Validators.required],
      salesForceL4: ['L4', Validators.required],
      salesForceL5: ['L5', Validators.required],
      salesForceL6: ['L6', Validators.required],
      source: ['1', Validators.required],
      remark: ['', Validators.required],
      status: ['Active', Validators.required],
      createdBy: ['1', Validators.required],
      lastUpdatedBy: ['1', Validators.required],
      deleted: [false, Validators.required],
    });
  }
  close() {
    this.dialogRef.close();
  }
  submit(item) {
    if (item.salesTeamName !== '' && item.companyCode !== '' && item.customerCode !== '') {
      this.store.dispatch(SalesTeamsActions.addSalesTeam({ salesteam: item }));
    }
    this.close();
  }
}
