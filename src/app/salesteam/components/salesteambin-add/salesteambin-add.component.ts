import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { NbDialogRef } from '@nebular/theme';
import { SalesTeamBin } from '@app/@core/data/salesteambin';
import { SalesTeam } from '@app/@core/data/salesteam';
import { SalesTeamSelectors } from '@app/salesteam/selectors/salesteams.selectors';
import { Observable } from 'rxjs';
import { SalesTeamBinsActions, SalesTeamsActions } from '@app/salesteam/actions';

@Component({
  selector: 'ngx-salesteambin-add',
  templateUrl: './salesteambin-add.component.html',
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
export class SalesTeamBinAddComponent implements OnInit {
  public addSalesTeamBinForm: FormGroup;
  public salesteambin: SalesTeamBin;
  salesteams$: Observable<SalesTeam[]>;
  @Input() salesteams: SalesTeam[];
  @Output() response: EventEmitter<any> = new EventEmitter();
  constructor(
    private fb: FormBuilder,
    private store: Store<SalesTeamBin>,
    private store_salesteam: Store<SalesTeam>,
    private dialogRef: NbDialogRef<SalesTeamBinAddComponent>
  ) {
    this.salesteams$ = this.store_salesteam.pipe(select(SalesTeamSelectors.selectAllSalesTeams));

  }

  ngOnInit() {
    this.store_salesteam.dispatch(SalesTeamsActions.loadSalesTeams({ salesteams: [] }));
    this.createForm();
  }

  createForm = () => {
    this.addSalesTeamBinForm = this.fb.group({
      lineId: [0, Validators.required],
      binCode: ['', Validators.required],
      binName: ['', Validators.required],
      binType: ['', Validators.required],
      locationCode: ['', Validators.required],
      companyCode: ['', Validators.required],
      customerCode: ['', Validators.required],
      salesTeamCode: ['', Validators.required],
      source: ['1', Validators.required],
      createdBy: ['1', Validators.required],
      lastUpdatedBy: ['1', Validators.required],
      // deleted: ['', Validators.required],
    });
  }
  close() {
    this.dialogRef.close();
  }
  submit(item) {
    if (item.binName !== '' && item.binType !== '') {
      this.store.dispatch(SalesTeamBinsActions.addSalesTeamBin({ salesteambin: item }));
    }
    this.close();
  }
}
