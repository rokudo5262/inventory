import { createReducer, on } from '@ngrx/store';
import { EmployeesActions, EmployeesApiActions } from '../actions';
import { employeeAdapter, employeeInitialState } from '../states';

export const employeesFeatureKey = 'employees';


export const reducer = createReducer(
    employeeInitialState,
    on(
        EmployeesActions.loadEmployees,
        EmployeesApiActions.loadEmployeesSuccess,
        (state, { employees }) => {
            employees = employees.filter(x => x.deleted === false);
            return employeeAdapter.addMany(employees, state);
        }
    ),
    on(
        EmployeesActions.addEmployee,
        EmployeesApiActions.addEmployeeSuccess,
        (state, { employee }) => employeeAdapter.addOne(employee, state),
    ),
    on(
        EmployeesActions.updateEmployee,
        (state, { update }) => employeeAdapter.updateOne(update, state),
    ),
    on(
        EmployeesActions.removeEmployee,
        (state, { update }) => employeeAdapter.updateOne(update, state),
    ),
    on(
        EmployeesActions.deleteEmployee,
        EmployeesApiActions.deleteEmployeeSuccess,
        (state, { employeeCode }) => employeeAdapter.removeOne(employeeCode, state),
    ),
);
