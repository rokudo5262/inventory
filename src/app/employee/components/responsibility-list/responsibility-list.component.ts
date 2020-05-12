import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Employee, EmployeeResponsibility } from '@app/@core/data';
import { EmployeeResponsibilitiesActions } from '@app/employee/actions';

@Component({
  selector: 'ngx-responsibility-list-detail',
  templateUrl: './responsibility-list.component.html',
  styleUrls: ['./responsibility-list.component.scss']
})
export class ResponsibilityListComponent implements OnInit {
  @Input() employee: Employee;
  @Input() employeeresponsibility: EmployeeResponsibility;

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
      employeeCode: {
        title: 'Employee Code',
        type: 'string',
        editable: false,
      },
      salesRegionCode: {
        title: 'Sales Region Code',
        type: 'string',
        editable: false,
      },
      salesRegionLevel: {
        title: 'Sales Region Level',
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
  responsibility: EmployeeResponsibility[];
  dialogRef: any;
  constructor(
    private store: Store<EmployeeResponsibility[]>,
    private route: Router,
  ) { }
  ngOnInit() {
    this.responsibility = this.employee ? this.employee.employeeResponsibility : [];
  }
  navigateToEmployeeResponsibility(event) {
    this.route.navigate(['dashboard/employeeresponsibilities/employeeresponsibility', event.data.lineId]);
  }
  delete(event) {
    if (window.confirm('Are you sure you want to delete Employee Responsibility:' + event.data.lineId + '?')) {
      this.store.dispatch(EmployeeResponsibilitiesActions.deleteEmployeeResponsibility({ lineId: event.data.lineId }));
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
  close() {
    this.dialogRef.close();
  }
  back() {
    this.route.navigate(['dashboard/employees/employee']);
  }
}
