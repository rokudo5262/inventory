import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { NbDialogRef } from '@nebular/theme';
import { EmployeeResponsibility, Employee } from '@app/@core/data';
import { EmployeeResponsibilitiesActions, EmployeesActions } from '@app/employee/actions';
import { EmployeeSelectors } from '@app/employee/selectors/employees.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngx-employee-responsibility-add',
  templateUrl: './employee-responsibility-add.component.html',
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
export class EmployeeResponsibilityAddComponent implements OnInit {
  public addEmployeeResponsibilityForm: FormGroup;
  public employeeresponsibility: EmployeeResponsibility;
  employees$: Observable<Employee[]>;
  @Input() employees: Employee[];
  @Output() response: EventEmitter<any> = new EventEmitter();
  constructor(
    private fb: FormBuilder,
    private store: Store<EmployeeResponsibility>,
    private store_employee: Store<Employee>,
    private dialogRef: NbDialogRef<EmployeeResponsibilityAddComponent>
  ) {
    this.employees$ = this.store_employee.pipe(select(EmployeeSelectors.selectAllEmployees));
  }

  ngOnInit() {
    this.store_employee.dispatch(EmployeesActions.loadEmployees({ employees: [] }));
    this.createForm();
  }

  createForm = () => {
    this.addEmployeeResponsibilityForm = this.fb.group({
      lineId: [0, Validators.required],
      employeeCode: ['', Validators.required],
      salesRegionCode: ['', Validators.required],
      salesRegionLevel: ['', Validators.required],
      companyCode: ['', Validators.required],
      customerCode: ['', Validators.required],
      locationCode: ['', Validators.required],
      salesRouteCode: ['1', Validators.required],
      role: ['1', Validators.required],
      source: ['1', Validators.required],
      createdBy: ['1', Validators.required],
      // createdDateTime: ['', Validators.required],
      lastUpdatedBy: ['1', Validators.required],
      // lastUpdatedDateTime: ['', Validators.required],
      // rowNumber?: ['', Validators.required],
      deleted: [false, Validators.required],
    });
  }
  close() {
    this.dialogRef.close();
  }
  submit(item) {
    if (item.employeeCode !== '') {
      this.store.dispatch(EmployeeResponsibilitiesActions.addEmployeeResponsibility({ employeeresponsibility: item }));
    }
    this.close();
  }
}
