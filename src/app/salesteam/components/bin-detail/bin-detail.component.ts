import { Component, OnInit, Input } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { SalesTeam, SalesTeamBin } from '@app/@core/data';
import { SalesTeamBinDeleteComponent } from '../salesteambin-delete/salesteambin-delete.component';
import { Store } from '@ngrx/store';
import { SalesTeamBinsActions } from '@app/salesteam/actions';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-bin-detail',
  templateUrl: './bin-detail.component.html',
  styleUrls: ['./bin-detail.component.scss']

})
export class BinDetailComponent implements OnInit {
  @Input() salesteam: SalesTeam;
  @Input() salesteambin: SalesTeamBin;

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
      companyCode: {
        title: 'Company Code',
        type: 'string',
        editable: true,
      },
      customerCode: {
        title: 'Customer Code',
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
  data: SalesTeamBin[];
  dialogRef: any;
  constructor(
    private dialogService: NbDialogService,
    private store: Store<SalesTeamBin>,
    private route: Router,
  ) { }
  ngOnInit() {
    this.data = this.salesteam ? this.salesteam.salesTeamBin : [];
  }
  navigateToSalesTeamBin(event) {
    this.route.navigate(['dashboard/salesteambins/salesteambin', event.data.lineId]);
  }
  edit() {
    this.dialogService.open(SalesTeamBinDeleteComponent, {
      context: {
        salesteambin: this.salesteambin
      }
    });
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
  back() {
    this.route.navigate(['dashboard/salesteams/salesteam']);
  }
}
