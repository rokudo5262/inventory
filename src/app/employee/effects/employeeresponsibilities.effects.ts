import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';
import { empty } from 'rxjs/internal/observable/empty';
import { EmployeeResponsibilitiesService } from '../services';
import { EmployeeResponsibility } from '@app/@core/data';
import { EmployeeResponsibilitiesActions, EmployeeResponsibilitiesApiActions } from '../actions';

@Injectable()
export class EmployeeResponsibilityEffect {
    load$ = createEffect(() => this.action$.pipe(
        ofType(EmployeeResponsibilitiesActions.loadEmployeeResponsibilities),
        mergeMap(() => this.employeeresponsibilitieservice.load_employee_responsibilities()
            .pipe(
                map((items: EmployeeResponsibility[]) =>
                    EmployeeResponsibilitiesApiActions
                        .loadEmployeeResponsibilitiesSuccess({ employeeresponsibilities: items })),
                catchError(err => of(EmployeeResponsibilitiesApiActions
                    .loadEmployeeResponsibilitiesFailure({ errorMsg: err.message })))
            ))
    ));
    add$ = createEffect(() => this.action$.pipe(
        ofType(EmployeeResponsibilitiesActions.addEmployeeResponsibility),
        switchMap(({ employeeresponsibility }) =>
            this.employeeresponsibilitieservice.add_employee_responsibility(employeeresponsibility).pipe(
                map((item: EmployeeResponsibility) =>
                    EmployeeResponsibilitiesApiActions
                        .addEmployeeResponsibilitySuccess({
                            employeeresponsibility: item
                        }
                        )),
                catchError(error => of(
                    EmployeeResponsibilitiesApiActions
                        .addEmployeeResponsibilityFailure({ errorMsg: error.message })))
            ))
    ));
    delete$ = createEffect(() => this.action$.pipe(
        ofType(EmployeeResponsibilitiesActions.deleteEmployeeResponsibility),
        switchMap(({ lineId }) => {
            if (lineId <= 0) {
                return empty;
            }
            return this.employeeresponsibilitieservice.delete_employee_responsibility(lineId).pipe(
                map((item: EmployeeResponsibility) =>
                    EmployeeResponsibilitiesApiActions
                        .deleteEmployeeResponsibilitySuccess({ lineId: item ? item.lineId : 0 })),
                catchError(err => of(
                    EmployeeResponsibilitiesApiActions
                        .deleteEmployeeResponsibilityFailure({ errorMsg: err.message })))
            );
        })
    ));
    remove$ = createEffect(() => this.action$.pipe(
        ofType(EmployeeResponsibilitiesActions.removeEmployeeResponsibility),
        switchMap(({ update }) =>
            this.employeeresponsibilitieservice.remove_employee_responsibility(update.changes).pipe(
                map(item =>
                    EmployeeResponsibilitiesApiActions
                        .removeEmployeeResponsibilitySuccess()),
                catchError(error => of(
                    EmployeeResponsibilitiesApiActions
                        .removeEmployeeResponsibilityFailure({ errorMsg: error.message })))
            ))
    ));
    update$ = createEffect(() => this.action$.pipe(
        ofType(EmployeeResponsibilitiesActions.updateEmployeeResponsibility),
        switchMap(({ update }) =>
            this.employeeresponsibilitieservice.update_employe_responsibility(update.changes).pipe(
                map(item =>
                    EmployeeResponsibilitiesApiActions
                        .updateEmployeeResponsibilitySuccess()),
                catchError(error => of(
                    EmployeeResponsibilitiesApiActions
                        .updateEmployeeResponsibilityFailure({ errorMsg: error.message })))
            ))
    ));
    delete_mutiple$ = createEffect(() => this.action$.pipe(
        ofType(EmployeeResponsibilitiesActions.deleteMultipleEmployeeResponsibility),
        switchMap(({ lineIds }) => {
            if (lineIds === []) {
                return empty;
            }
            return this.employeeresponsibilitieservice.delete_multiple_employee_responsibility(lineIds).pipe(
                map((items: EmployeeResponsibility[]) => {
                    const lineIds: number[] = [];
                    items.forEach(item => lineIds.push(item.lineId));
                    return EmployeeResponsibilitiesApiActions
                        .deleteMultipleEmployeeResponsibilitySuccess({ lineIds: lineIds });
                }),
                catchError(error => of(EmployeeResponsibilitiesApiActions
                    .deleteMultipleEmployeeResponsibilityFailure({ errorMsg: 'Only delete when status = new' })))
            );
        })
    ));
    constructor(
        private action$: Actions,
        private employeeresponsibilitieservice: EmployeeResponsibilitiesService,
    ) { }
}
