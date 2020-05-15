import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Update } from '@ngrx/entity';
import { NbDialogService } from '@nebular/theme';
import { EmployeeResponsibility } from '@app/@core/data';
import { EmployeeResponsibilitiesActions } from '@app/employee/actions';
import { EmployeeResponsibilitySelectors } from '@app/employee/selectors/employeeresponsibilities.selectors';
import { EmployeeResponsibilityAddComponent } from '../employee-responsibility-add/employee-responsibility-add.component';

@Component({
  selector: 'ngx-employee-responsibility-list',
  templateUrl: './employee-responsibility-list.component.html',
  styleUrls: ['./employee-responsibility-list.component.scss'],
})
export class EmployeeResponsibilityListComponent implements OnInit {
  settings = {
    hideSubHeader: false,
    // selectMode: 'multi',
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
        title: 'Line Id',
        filter: true,
        type: 'number',
        editable: false,
      },
      locationCode: {
        title: 'Location Code',
        filter: true,
        type: 'string',
        editable: false,
      },
      companyCode: {
        title: 'Company Code',
        filter: true,
        type: 'string',
        editable: false,
      },
      customerCode: {
        title: 'Customer Code',
        filter: true,
        type: 'string',
        editable: false,
      },
      salesRegionCode: {
        title: 'Sales Region Code',
        filter: true,
        type: 'string',
        editable: false,
      },
      salesRegionLevel: {
        title: 'Sales Region Level',
        filter: true,
        type: 'string',
        editable: false,
      },
      employeeCode: {
        title: 'Employee Code',
        filter: true,
        type: 'string',
        editable: false,
      },
    },
    actions: {
      add: false,
      delete: true,
      edit: false,
    }
  };
  data$: Observable<EmployeeResponsibility[]>;
  dialogRef: any;
  constructor(
    private store: Store<EmployeeResponsibility>,
    private route: Router,
    private dialogService: NbDialogService,
  ) {
    this.data$ = this.store.pipe(select(EmployeeResponsibilitySelectors.selectAllEmployeeResponsibilities));
    this.data$.subscribe(g => console.log(g.length));
  }
  ngOnInit() {
    this.store.dispatch(EmployeeResponsibilitiesActions.loadEmployeeResponsibilities({ employeeresponsibilities: [] }));
  }
  open() {
    this.dialogService.open(EmployeeResponsibilityAddComponent);
  }
  navigateToRoomGroup(event) {
    this.route.navigate(['dashboard/employeeresponsibilities/employeeresponsibility', event.data.lineId]);
  }
  edit(event) {
    if (window.confirm('Are you sure you want to edit employee responsibility :' + event.data.lineId + '?')) {
      const changes = event.newData;
      const update: Update<EmployeeResponsibility> = {
        id: event.data.lineId,
        changes: changes
      };
      this.store.dispatch(EmployeeResponsibilitiesActions.updateEmployeeResponsibility({ update: update }));
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
  delete(event) {
    if (window.confirm('Are you sure you want to delete employee responsibility:' + event.data.lineId + '?')) {
      this.store.dispatch(EmployeeResponsibilitiesActions.deleteEmployeeResponsibility({ lineId: event.data.lineId }));
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
  add(event) {
    if (window.confirm('Are you sure you want to add employee responsibility:' + event.data.lineId + '?')) {
      this.store.dispatch(EmployeeResponsibilitiesActions.addEmployeeResponsibility({ employeeresponsibility: event }));
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
  close() {
    this.dialogRef.close();
  }
}
