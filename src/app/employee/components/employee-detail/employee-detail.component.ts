import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { EmployeesActions } from '@app/employee/actions';
import { EmployeeSelectors } from '@app/employee/selectors';
import { Employee } from '@app/@core/data';

@Component({
  selector: 'ngx-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss'],
})
export class EmployeeDetailComponent implements OnInit {
  employee$;
  employeeCode$: string;
  constructor(
    private router: ActivatedRoute,
    private store: Store<Employee>
  ) {
    this.employeeCode$ = this.router.snapshot.params.employeeCode;
    this.employee$ = this.store.pipe(select(EmployeeSelectors.selectCurrentEmployee(this.employeeCode$)));
  }
  ngOnInit() {
    this.store.dispatch(EmployeesActions.loadEmployees({ employees: [] }));
  }
}
