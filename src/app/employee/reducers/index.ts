import * as EmployeeReducer from './employee.reducers';
import * as EmployeeResponsibilityReducer from './employee-responsibility.reducers';
import { combineReducers, Action } from '@ngrx/store';
import { EmployeeState } from '../states/employee.state';
import { EmployeeResponsibilityState } from '../states/employee-responsibility.state';

export {
    EmployeeReducer,
    EmployeeResponsibilityReducer,
};
export const employeesFeatureKey = 'employees';
export const employeeresponsibilitiesFeatureKey = 'employeeresponsibilities';


export interface StateEmployee {
    [EmployeeReducer.employeesFeatureKey]: EmployeeState;
}

export function reducer_employee(state: StateEmployee | undefined, action: Action) {
    return combineReducers({
        [EmployeeReducer.employeesFeatureKey]: EmployeeReducer.reducer,
    })(state, action);
}

export interface StateEmployeeResponsibility {
    [EmployeeResponsibilityReducer.employeeresponsibilitiesFeatureKey]: EmployeeResponsibilityState;
}

export function reducer_employeeresponsibility(state: StateEmployeeResponsibility | undefined, action: Action) {
    return combineReducers({
        [EmployeeResponsibilityReducer.employeeresponsibilitiesFeatureKey]: EmployeeResponsibilityReducer.reducer,
    })(state, action);
}
