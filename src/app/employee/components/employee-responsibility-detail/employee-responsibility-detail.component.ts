import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { EmployeeResponsibilitiesActions } from '@app/employee/actions';
import { EmployeeResponsibilitySelectors } from '@app/employee/selectors';
import { EmployeeResponsibility } from '@app/@core/data';

@Component({
  templateUrl: './employee-responsibility-detail.component.html',
})
export class EmployeeResponsibilityDetailComponent implements OnInit {
  employeeresponsibility$;
  lineId$: number;
  constructor(
    private router: ActivatedRoute,
    private store: Store<EmployeeResponsibility>
  ) {
    this.lineId$ = +this.router.snapshot.params.lineId;
    this.employeeresponsibility$ = this.store.pipe(select(EmployeeResponsibilitySelectors
      .selectCurrentEmployeeResponsibility(this.lineId$)));
  }
  ngOnInit() {
    this.store.dispatch(EmployeeResponsibilitiesActions
      .loadEmployeeResponsibilities({ employeeresponsibilities: [] }));
  }
}
