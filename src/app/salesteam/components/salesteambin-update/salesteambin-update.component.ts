import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { NbDialogRef } from '@nebular/theme';
import { SalesTeamBin } from '@app/@core/data/salesteambin';
import { SalesTeam } from '@app/@core/data/salesteam';
import { Observable } from 'rxjs';
import { SalesTeamBinsActions, SalesTeamsActions } from '@app/salesteam/actions';
import { SalesTeamSelectors } from '@app/salesteam/selectors/salesteams.selectors';

@Component({
  selector: 'ngx-salesteambin-update',
  templateUrl: './salesteambin-update.component.html',
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
export class SalesTeamBinUpdateComponent implements OnInit {
  public updateSalesTeamBinForm: FormGroup;
  public salesteambin: SalesTeamBin;
  salesteams$: Observable<SalesTeam[]>;
  @Input() salesteams: SalesTeam[];
  constructor(
    private fb: FormBuilder,
    private store_salesteambin: Store<SalesTeamBin>,
    private store_salesteam: Store<SalesTeam>,
    private dialogRef: NbDialogRef<SalesTeamBinUpdateComponent>
  ) {
    this.salesteams$ = this.store_salesteam.pipe(select(SalesTeamSelectors.selectAllSalesTeams));
  }

  ngOnInit() {
    this.store_salesteam.dispatch(SalesTeamsActions.loadSalesTeams({ salesteams: [] }));
    this.createForm();

  }
  createForm = () => {
    this.updateSalesTeamBinForm = this.fb.group({
      lineId: [this.salesteambin ? this.salesteambin.lineId : '', Validators.required],
      binCode: [this.salesteambin ? this.salesteambin.binCode : '', Validators.required],
      binName: [this.salesteambin ? this.salesteambin.binName : '', Validators.required],
      binType: [this.salesteambin ? this.salesteambin.binType : '', Validators.required],
      locationCode: [this.salesteambin ? this.salesteambin.locationCode : '', Validators.required],
      companyCode: [this.salesteambin ? this.salesteambin.companyCode : '', Validators.required],
      customerCode: [this.salesteambin ? this.salesteambin.customerCode : '', Validators.required],
      salesTeamCode: [this.salesteambin ? this.salesteambin.salesTeamCode : '', Validators.required],
      source: [this.salesteambin ? this.salesteambin.source : '', Validators.required],
      createdBy: [this.salesteambin ? this.salesteambin.createdBy : '', Validators.required],
      lastUpdatedBy: [this.salesteambin ? this.salesteambin.lastUpdatedBy : '', Validators.required],
      createdDateTime: [this.salesteambin ? this.salesteambin.createdDateTime : '', Validators.required],
      // deleted: [this.salesteambin ? this.salesteambin.deleted : '', Validators.required],
    });
  }

  close() {
    this.dialogRef.close();
  }

  submit(item) {
    if (item.binCode !== '' && item.binName !== '' && item.binType !== '') {
      if (item.lineId !== '') {
        const update = {
          id: item.lineId,
          changes: item
        };
        this.store_salesteambin.dispatch(SalesTeamBinsActions.updateSalesTeamBin({ update: update }));
      } else {
        this.store_salesteambin.dispatch(SalesTeamBinsActions.addSalesTeamBin({ salesteambin: item }));
      }
    }
    this.close();
  }
}
