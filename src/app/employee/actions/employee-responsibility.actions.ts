import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { EmployeeResponsibility } from '@app/@core/data';

export const loadEmployeeResponsibilities = createAction(
  '[EmployeeResponsibility/API] Load Employee Responsibilities',
  props<{ employeeresponsibilities: EmployeeResponsibility[] }>(),
);
export const addEmployeeResponsibility = createAction(
  '[EmployeeResponsibility/API] Add Employee Responsibility',
  props<{ employeeresponsibility: EmployeeResponsibility }>(),
);
export const updateEmployeeResponsibility = createAction(
  '[EmployeeResponsibility/API] Update Employee Responsibility',
  props<{ update: Update<EmployeeResponsibility> }>(),
);
export const deleteEmployeeResponsibility = createAction(
  '[EmployeeResponsibility/API] Delete Employee Responsibility',
  props<{ lineId: number }>(),
);
export const removeEmployeeResponsibility = createAction(
  '[EmployeeResponsibility/API] Remove Employee Responsibility',
  props<{ update: Update<EmployeeResponsibility> }>(),
);
export const deleteMultipleEmployeeResponsibility = createAction(
  '[EmployeeResponsibility/API] Delete Multiple EmployeeResponsibility',
  props<{ lineIds: number[] }>(),
);
