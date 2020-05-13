import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SalesTeam } from '@app/@core/data/salesteam';
import { SalesTeamSelectors } from '@app/salesteam/selectors/salesteams.selectors';
import { SalesTeamsActions } from '@app/salesteam/actions';
import { Update } from '@ngrx/entity/src/models';

@Component({
  selector: 'ngx-salesteam-smart-table',
  templateUrl: './salesteam-list.component.html',
  styleUrls: ['./salesteam-list.component.scss'],
})
export class SalesTeamListComponent implements OnInit {
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
      salesTeamCode: {
        title: 'Sales Team Code',
        type: 'string',
        editable: true,
      },
      salesTeamName: {
        title: 'Sales Team Name',
        type: 'string',
        editable: true,
      },
      channelCode: {
        title: 'channel Code',
        type: 'string',
        editable: true,
      },
      channelName: {
        title: 'channel Name',
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
      remark: {
        title: 'Remark',
        type: 'string',
        editable: true,
      },
      status: {
        title: 'Status',
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
  salesteams$: Observable<SalesTeam[]>;
  dialogRef: any;
  constructor(
    private store: Store<SalesTeam>,
    private route: Router,
  ) {
    this.salesteams$ = this.store.pipe(select(SalesTeamSelectors.selectAllSalesTeams));
  }
  ngOnInit() {
    this.store.dispatch(SalesTeamsActions.loadSalesTeams({ salesteams: [] }));
  }
  navigateToSalesTeam(event) {
    this.route.navigate(['dashboard/salesteams/salesteam', event.data.salesTeamCode]);
  }
  edit(event) {
    if (window.confirm('Are you sure you want to edit ' + event.data.salesTeamCode + '?')) {
      const changes = event.newData;
      const update: Update<SalesTeam> = {
        id: event.data.salesTeamcode,
        changes: changes,
      };
      this.store.dispatch(SalesTeamsActions.updateSalesTeam({ update: update }));
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
  delete(event) {
    if (window.confirm('Are you sure you want to delete SalesTeam :' + event.data.salesTeamCode + '?')) {
      if (event.data.status === 'Inactive') {
        this.store.dispatch(SalesTeamsActions.deleteSalesTeam({ salesTeamCode: event.data.salesTeamCode }));
        event.confirm.resolve();
      } else {
        window.alert('SalesTeam status is still ' + event.data.status + ' cannot delete');
        event.confirm.reject();
      }
    } else {
      event.confirm.reject();
    }
  }
  close() {
    this.dialogRef.close();
  }
}
