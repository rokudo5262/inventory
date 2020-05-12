import { Component, OnInit, Input } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { SalesTeam, SalesTeamBin } from '@app/@core/data';
import { SalesTeamBinDeleteComponent } from '../salesteambin-delete/salesteambin-delete.component';
import { Store } from '@ngrx/store';
import { SalesTeamBinsActions } from '@app/salesteam/actions';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-bin-detail-2',
  templateUrl: './bin-detail-2.component.html',
  styleUrls: ['./bin-detail-2.component.scss']

})
export class BinDetail2Component implements OnInit {
  @Input() salesteam: SalesTeam;
  @Input() salesteambin: SalesTeamBin;

  settings = {
    selectMode: 'multi',
    mode: 'external',
    hideSubHeader: false,
    edit: {
      editButtonContent: '<i class="nb-compose"></i>',
      // editButtonContent: '<i class="nb-edit"></i>',
      // saveButtonContent: '<i class="nb-checkmark"></i>',
      // cancelButtonContent: '<i class="nb-close"></i>',
      // confirmSave: true
    },
    // delete: {
    //   deleteButtonContent: '<i class="nb-trash"></i>',
    //   confirmDelete: true,
    // },
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
      delete: false,
      edit: true,

    }
  };
  data: SalesTeamBin[];
  selectedRows = [];
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
  // onEdit(event){
  //   this.route.navigate(['dashboard/salesteambins/salesteambin', event.data.lineId]);
  // }
  onUserRowSelect(event) {
    console.log('user row select: ', event); this.selectedRows = event.selected.map(x => x.employeeCode);
    console.log('selected list: ', this.selectedRows);
  }
  delete() {
    console.log(this.selectedRows);
    this.store.dispatch(SalesTeamBinsActions.deleteMultipleSalesTeamBin({ lineIds: this.selectedRows }));
  }
  close() {
    this.dialogRef.close();
  }
  back() {
    this.route.navigate(['dashboard/salesteams/salesteam']);
  }
}
