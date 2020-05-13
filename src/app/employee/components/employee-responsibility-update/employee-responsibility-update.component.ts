import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { NbDialogRef } from '@nebular/theme';
import { EmployeeResponsibility, Employee } from '@app/@core/data';
import { EmployeeResponsibilitiesActions, EmployeesActions } from '@app/employee/actions';
import { Observable } from 'rxjs';
import { EmployeeSelectors } from '@app/employee/selectors/employees.selectors';

@Component({
  selector: 'ngx-employee-responsibility-update',
  templateUrl: './employee-responsibility-update.component.html',
  styleUrls: ['./employee-responsibility-update.component.scss'],
})
export class EmployeeResponsibilityUpdateComponent implements OnInit {
  public updateEmployeeResponsibilityForm: FormGroup;
  public employeeresponsibility: EmployeeResponsibility;
  employees$: Observable<Employee[]>;
  @Input() employees: Employee[];
  constructor(
    private fb: FormBuilder,
    private store: Store<EmployeeResponsibility>,
    private store_employee: Store<Employee>,
    private dialogRef: NbDialogRef<EmployeeResponsibilityUpdateComponent>
  ) {
    this.employees$ = this.store_employee.pipe(select(EmployeeSelectors.selectAllEmployees));

  }

  ngOnInit() {
    this.store_employee.dispatch(EmployeesActions.loadEmployees({ employees: [] }));
    this.createForm();
  }
  createForm = () => {
    this.updateEmployeeResponsibilityForm = this.fb.group({
      lineId: [this.employeeresponsibility ? this.employeeresponsibility.lineId : '',
      Validators.required],
      employeeCode: [this.employeeresponsibility ? this.employeeresponsibility.employeeCode : '',
      Validators.required],
      salesRegionCode: [this.employeeresponsibility ? this.employeeresponsibility.salesRegionCode : '',
      Validators.required],
      salesRegionLevel: [this.employeeresponsibility ? this.employeeresponsibility.salesRegionLevel : '',
      Validators.required],
      companyCode: [this.employeeresponsibility ? this.employeeresponsibility.companyCode : '',
      Validators.required],
      customerCode: [this.employeeresponsibility ? this.employeeresponsibility.customerCode : '',
      Validators.required],
      locationCode: [this.employeeresponsibility ? this.employeeresponsibility.locationCode : '',
      Validators.required],
      salesRouteCode: [this.employeeresponsibility ? this.employeeresponsibility.salesRouteCode : '',
      Validators.required],
      role: [this.employeeresponsibility ? this.employeeresponsibility.role : '',
      Validators.required],
      source: [this.employeeresponsibility ? this.employeeresponsibility.source : '',
      Validators.required],
      createdBy: [this.employeeresponsibility ? this.employeeresponsibility.createdBy : '',
      Validators.required],
      createdDateTime: [this.employeeresponsibility ? this.employeeresponsibility.createdDateTime : '',
      Validators.required],
      lastUpdatedBy: [this.employeeresponsibility ? this.employeeresponsibility.lastUpdatedBy : '',
      Validators.required],
      // lastUpdatedDateTime: [this.employeeresponsibility ? this.employeeresponsibility.lastUpdatedDateTime :'',
      // Validators.required],
      // rowNumber?: [this.employeeresponsibility ? this.employeeresponsibility.rowNumber :'',
      //  Validators.required],
      deleted: [this.employeeresponsibility ? this.employeeresponsibility.deleted : '',
      Validators.required],
    });
  }

  close() {
    this.dialogRef.close();
  }

  submit(item) {
    const update = {
      id: item.lineId,
      changes: item
    };
    this.store.dispatch(EmployeeResponsibilitiesActions
      .updateEmployeeResponsibility({ update: update }));
    this.close();
  }
}
