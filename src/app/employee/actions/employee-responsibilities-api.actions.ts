import { createAction, props } from '@ngrx/store';
import { EmployeeResponsibility } from '@app/@core/data';

/**
 * Load Employee Responsibility Api Action
 */
export const loadEmployeeResponsibilitiesSuccess = createAction(
  '[EmployeeResponsibilities/API] Load Employee Responsibilities Success',
  props<{ employeeresponsibilities: EmployeeResponsibility[] }>(),
);
export const loadEmployeeResponsibilitiesFailure = createAction(
  '[EmployeeResponsibilities/API] Load Employee Responsibilities  Failure',
  props<{ errorMsg: any }>(),
);
/**
 * Add Employee Responsibility  Api Actions
 */
export const addEmployeeResponsibilitySuccess = createAction(
  '[EmployeeResponsibility/API] Add Employee Responsibility  Success',
  props<{ employeeresponsibility: EmployeeResponsibility }>(),
);
export const addEmployeeResponsibilityFailure = createAction(
  '[EmployeeResponsibility/API] Add Employee Responsibility Failure',
  props<{ errorMsg: any }>(),
);
/**
 * Delete Employee Responsibility Api Actions
 */
export const deleteEmployeeResponsibilitySuccess = createAction(
  '[EmployeeResponsibility/API] Delete Employee Responsibility Success',
  props<{ lineId: number }>(),
);
export const deleteEmployeeResponsibilityFailure = createAction(
  '[EmployeeResponsibility/API] Delete Employee Failure',
  props<{ errorMsg: any }>(),
);
/**
 * Update Employee Responsibility Api Actions
 */
export const updateEmployeeResponsibilitySuccess = createAction(
  '[EmployeeResponsibility/API] Update Employee Responsibility Success',
);
export const updateEmployeeResponsibilityFailure = createAction(
  '[EmployeeResponsibility/API] Update Employee Responsibility  Failure',
  props<{ errorMsg: any }>(),
);
/**
 * Remove Employee Responsibility Api Actions
 */
export const removeEmployeeResponsibilitySuccess = createAction(
  '[EmployeeResponsibility/API] Remove Employee Responsibility Success',
);
export const removeEmployeeResponsibilityFailure = createAction(
  '[EmployeeResponsibility/API] Remove Employee Responsibility Failure',
  props<{ errorMsg: any }>(),
);
/**
 * Delete Multiple Employee Responsibility Api Actions
 */
export const deleteMultipleEmployeeResponsibilitySuccess = createAction(
  '[EmployeeResponsibility/API] Delete Multiple Employee Responsibility success',
  props<{ lineIds: number[] }>(),
);

export const deleteMultipleEmployeeResponsibilityFailure = createAction(
  '[EmployeeResponsibility/API] Delete Multiple Employee Responsibility failure',
  props<{ errorMsg: any }>(),
);
