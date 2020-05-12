import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';
import { empty } from 'rxjs/internal/observable/empty';
import { EmployeesActions, EmployeesApiActions } from '../actions';
import { EmployeesService } from '../services';
import { Employee } from '@app/@core/data';

@Injectable()
export class EmployeeEffect {
    load$ = createEffect(() => this.action$.pipe(
        ofType(EmployeesActions.loadEmployees),
        mergeMap(() => this.employeeservice.load_employees()
            .pipe(
                map((items: Employee[]) =>
                    EmployeesApiActions.loadEmployeesSuccess({ employees: items })),
                catchError(err => of(EmployeesApiActions.loadEmployeesFailure({ errorMsg: err.message })))
            ))
    ));
    add$ = createEffect(() => this.action$.pipe(
        ofType(EmployeesActions.addEmployee),
        switchMap(({ employee }) =>
            this.employeeservice.add_employee(employee).pipe(
                map((item: Employee) =>
                    EmployeesApiActions.addEmployeeSuccess({
                        employee: item
                    }
                    )),
                catchError(error => of(
                    EmployeesApiActions.addEmployeeFailure({ errorMsg: error.message })))
            ))
    ));
    delete$ = createEffect(() => this.action$.pipe(
        ofType(EmployeesActions.deleteEmployee),
        switchMap(({ employeeCode }) => {
            if (employeeCode <= '') {
                return empty;
            }
            return this.employeeservice.delete_employee(employeeCode).pipe(
                map((item: Employee) =>
                    EmployeesApiActions
                        .deleteEmployeeSuccess({ employeeCode: item ? item.employeeCode : '' })),
                catchError(err => of(
                    EmployeesApiActions
                        .deleteEmployeeFailure({ errorMsg: err.message })))
            );
        })
    ));
    remove$ = createEffect(() => this.action$.pipe(
        ofType(EmployeesActions.removeEmployee),
        switchMap(({ update }) =>
            this.employeeservice.remove_employee(update.changes).pipe(
                map(item =>
                    EmployeesApiActions.removeEmployeeSuccess()),
                catchError(error => of(
                    EmployeesApiActions.removeEmployeeFailure({ errorMsg: error.message })))
            ))
    ));
    update$ = createEffect(() => this.action$.pipe(
        ofType(EmployeesActions.updateEmployee),
        switchMap(({ update }) =>
            this.employeeservice.update_employee(update.changes).pipe(
                map(item =>
                    EmployeesApiActions.updateEmployeeSuccess()),
                catchError(error => of(
                    EmployeesApiActions.updateEmployeeFailure({ errorMsg: error.message })))
            ))
    ));
    constructor(
        private action$: Actions,
        private employeeservice: EmployeesService,
    ) { }
}
