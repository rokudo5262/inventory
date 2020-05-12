import { createFeatureSelector } from '@ngrx/store';
import {
    StateEmployee,
    employeesFeatureKey,
    StateEmployeeResponsibility,
    employeeresponsibilitiesFeatureKey
} from '../reducers';

export const selectEmployeesState = createFeatureSelector
    <StateEmployee>(employeesFeatureKey);
export const selectEmployeeResponsibilitiesState = createFeatureSelector
    <StateEmployeeResponsibility>(employeeresponsibilitiesFeatureKey);
