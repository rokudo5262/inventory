import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NbDialogService } from '@nebular/theme';
import { Employee } from '@app/@core/data';
import { EmployeeSelectors } from '@app/employee/selectors/employees.selectors';
import { EmployeesActions } from '@app/employee/actions';
import { EmployeeAddComponent } from '../employee-add/employee-add.component';

@Component({
  selector: 'ngx-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent implements OnInit {
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
      employeeCode: {
        title: 'Employee Code',
        filter: true,
        type: 'string',
        editable: false,
      },
      employeeName: {
        title: 'Employee Name',
        filter: true,
        type: 'string',
        editable: false,
      },
      phone: {
        title: 'Phone Number',
        filter: true,
        type: 'string',
        editable: false,
      },
      hiredDate: {
        title: 'Hired Date',
        filter: true,
        type: 'date',
        editable: false,
      },
      endDate: {
        title: 'End Date',
        filter: true,
        type: 'date',
        editable: false,
      },
      email: {
        title: 'Email',
        filter: true,
        type: 'string',
        editable: false,
      },
      status: {
        title: 'Status',
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
  employees$: Observable<Employee[]>;
  dialogRef: any;
  constructor(
    private store: Store<Employee>,
    private route: Router,
    private dialogService: NbDialogService,
  ) {
    this.employees$ = this.store.pipe(select(EmployeeSelectors.selectAllEmployees));
  }
  ngOnInit() {
    this.store.dispatch(EmployeesActions.loadEmployees({ employees: [] }));
  }
  open() {
    this.dialogService.open(EmployeeAddComponent);
  }
  navigateToRoomGroup(event) {
    this.route.navigate(['dashboard/employees/employee', event.data.employeeCode]);
  }
  delete(event) {
    if (window.confirm('Are you sure you want to delete employee:' + event.data.employeeCode + '?')) {
      if (event.data.status === 'Inactive') {
        this.store.dispatch(EmployeesActions.deleteEmployee({ employeeCode: event.data.employeeCode }));
        event.confirm.resolve();
      } else {
        window.alert('Employee status is still ' + event.data.status + ' cannot delete');
        event.confirm.reject();
      }
    } else {
      event.confirm.reject();
    }
  }
}
