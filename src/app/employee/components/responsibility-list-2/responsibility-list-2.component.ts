import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Employee, EmployeeResponsibility } from '@app/@core/data';
import { EmployeeResponsibilitiesActions } from '@app/employee/actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngx-responsibility-list-2-detail',
  templateUrl: './responsibility-list-2.component.html',
  styleUrls: ['./responsibility-list-2.component.scss'],

})
export class ResponsibilityList2Component implements OnInit {
  @Input() employee: Employee;
  @Input() employeeresponsibility: EmployeeResponsibility;
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
      delete: false,
      edit: true,
    }
  };
  employeeresponsibilities$: Observable<EmployeeResponsibility[]>;
  data: EmployeeResponsibility[];
  selectedRows = [];
  dialogRef: any;
  constructor(
    private store: Store<EmployeeResponsibility[]>,
    private route: Router,
  ) {
  }
  ngOnInit() {
    this.data = this.employee ? this.employee.employeeResponsibility : [];
  }
  navigateToEmployeeResponsibility(event) {
    this.route.navigate(['dashboard/employeeresponsibilities/employeeresponsibility', event.data.lineId]);
  }
  close() {
    this.dialogRef.close();
  }
  back() {
    this.route.navigate(['dashboard/employees/employee']);
  }
  onUserRowSelect(event) {
    console.log('user row select: ', event); this.selectedRows = event.selected.map(x => x.employeeCode);
    console.log('selected list: ', this.selectedRows);
  }
  delete() {
    console.log(this.selectedRows);
    this.store.dispatch(EmployeeResponsibilitiesActions
      .deleteMultipleEmployeeResponsibility({ lineIds: this.selectedRows }));
  }
}
