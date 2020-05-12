import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Update } from '@ngrx/entity';
import { NbDialogService } from '@nebular/theme';
import { SalesTeamBin } from '@app/@core/data/salesteambin';
import { SalesTeamBinAddComponent } from '../salesteambin-add/salesteambin-add.component';
import { SalesTeamBinsActions } from '@app/salesteam/actions';
import { SalesTeamBinSelectors } from '@app/salesteam/selectors/salesteambins.selectors';


@Component({
  selector: 'ngx-salesteambin-smart-table',
  templateUrl: './salesteambin-list.component.html',
  styleUrls: ['./salesteambin-list.component.scss']

})
export class SalesTeamBinListComponent implements OnInit {
  settings = {
    // selectMode: 'multi',
    hideSubHeader: false,
    // edit: {
    //   editButtonContent: '<i class="nb-edit"></i>',
    //   saveButtonContent: '<i class="nb-checkmark"></i>',
    //   cancelButtonContent: '<i class="nb-close"></i>',
    //   confirmSave: true
    // },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      lineId: {
        title: 'lineId',
        type: 'number',
        editable: false,
      },
      binCode: {
        title: 'binCode',
        type: 'string',
        editable: false,
      },
      binName: {
        title: 'binName',
        type: 'string',
        editable: true,
      },
      binType: {
        title: 'binType',
        type: 'string',
        editable: true,
      },
      salesTeamCode: {
        title: 'salesTeamCode',
        type: 'string',
        editable: true,
      },
    },
    actions: {
      add: false,
      delete: true,
      edit: false,
    }
  };
  salesteambins$: Observable<SalesTeamBin[]>;
  dialogRef: any;
  constructor(
    private store: Store<SalesTeamBin>,
    private route: Router,
    private dialogService: NbDialogService,
  ) {
    this.salesteambins$ = this.store.pipe(select(SalesTeamBinSelectors.selectAllSalesTeamBins));
  }
  ngOnInit() {
    this.store.dispatch(SalesTeamBinsActions.loadSalesTeamBins({ salesteambins: [] }));
  }
  open() {
    this.dialogService.open(SalesTeamBinAddComponent);
  }
  navigateToSalesTeamBin(event) {
    this.route.navigate(['dashboard/salesteambins/salesteambin', event.data.lineId]);
  }
  edit(event) {
    if (window.confirm('Are you sure you want to edit salesteambin :' + event.data.lineId + '?')) {
      const changes = event.newData;
      const update: Update<SalesTeamBin> = {
        id: event.data.lineId,
        changes: changes
      };
      this.store.dispatch(SalesTeamBinsActions.updateSalesTeamBin({ update: update }));
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
  delete(event) {
    if (window.confirm('Are you sure you want to delete salesteambin:' + event.data.lineId + '?')) {
      this.store.dispatch(SalesTeamBinsActions.deleteSalesTeamBin({ lineId: event.data.lineId }));
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
  close() {
    this.dialogRef.close();
  }
}
