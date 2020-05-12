import { createReducer, on } from '@ngrx/store';
import { employeeresponsibilityAdapter, employeeresponsibilityInitialState } from '../states';
import { EmployeeResponsibilitiesActions, EmployeeResponsibilitiesApiActions } from '../actions';

export const employeeresponsibilitiesFeatureKey = 'employeeresponsibilities';

export const reducer = createReducer(
    employeeresponsibilityInitialState,
    on(
        EmployeeResponsibilitiesActions.loadEmployeeResponsibilities,
        EmployeeResponsibilitiesApiActions.loadEmployeeResponsibilitiesSuccess,
        (state, { employeeresponsibilities }) => {
            employeeresponsibilities = employeeresponsibilities.filter(x => x.deleted === false);
            return employeeresponsibilityAdapter.addMany(employeeresponsibilities, state);
        }
    ),
    on(
        EmployeeResponsibilitiesActions.addEmployeeResponsibility,
        EmployeeResponsibilitiesApiActions.addEmployeeResponsibilitySuccess,
        (state, { employeeresponsibility }) => employeeresponsibilityAdapter.addOne(employeeresponsibility, state),
    ),
    on(
        EmployeeResponsibilitiesActions.updateEmployeeResponsibility,
        (state, { update }) => employeeresponsibilityAdapter.updateOne(update, state),
    ),
    on(
        EmployeeResponsibilitiesActions.removeEmployeeResponsibility,
        (state, { update }) => employeeresponsibilityAdapter.updateOne(update, state),
    ),
    on(
        EmployeeResponsibilitiesActions.deleteEmployeeResponsibility,
        EmployeeResponsibilitiesApiActions.deleteEmployeeResponsibilitySuccess,
        (state, { lineId }) => employeeresponsibilityAdapter.removeOne(lineId, state),
    ),
    on(
        EmployeeResponsibilitiesActions.deleteMultipleEmployeeResponsibility,
        EmployeeResponsibilitiesApiActions.deleteMultipleEmployeeResponsibilitySuccess,
        (state, { lineIds }) => employeeresponsibilityAdapter.removeMany(lineIds, state),
    ),
);
