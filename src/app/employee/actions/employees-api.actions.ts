import { createAction, props } from '@ngrx/store';
import { Employee } from '@app/@core/data';

/**
 * Load Employee Api Action
 */
export const loadEmployeesSuccess = createAction(
  '[Employee/API] Load Employees Success',
  props<{ employees: Employee[] }>(),
);
export const loadEmployeesFailure = createAction(
  '[Employee/API] Load Employees Failure',
  props<{ errorMsg: any }>(),
);
/**
 * Add Employee Api Actions
 */
export const addEmployeeSuccess = createAction(
  '[Employee/API] Add Employees Success',
  props<{ employee: Employee }>(),
);
export const addEmployeeFailure = createAction(
  '[Employee/API] Add Employees Failure',
  props<{ errorMsg: any }>(),
);
/**
 * Delete Employee Actions
 */
export const deleteEmployeeSuccess = createAction(
  '[Employee/API] Delete Employee Success',
  props<{ employeeCode: string }>(),
);
export const deleteEmployeeFailure = createAction(
  '[Employee/API] Delete Employee Failure',
  props<{ errorMsg: any }>(),
);
/**
 * Update Employee Actions
 */
export const updateEmployeeSuccess = createAction(
  '[Employee/API] Update Employee Success',
);
export const updateEmployeeFailure = createAction(
  '[Employee/API] Update Employee Failure',
  props<{ errorMsg: any }>(),
);
/**
 * Remove Employee Actions
 */
export const removeEmployeeSuccess = createAction(
  '[Employee/API] Remove Employees Success',
);
export const removeEmployeeFailure = createAction(
  '[Employee/API] Remove Employees Failure',
  props<{ errorMsg: any }>(),
);
