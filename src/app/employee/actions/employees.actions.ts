import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Employee } from '@app/@core/data';

export const loadEmployees = createAction(
  '[Employee/API] Load Employees',
  props<{ employees: Employee[] }>(),
);
export const addEmployee = createAction(
  '[Employee/API] Add Employee',
  props<{ employee: Employee }>(),
);
export const updateEmployee = createAction(
  '[Employee/API] Update Employee',
  props<{ update: Update<Employee> }>(),
);
export const deleteEmployee = createAction(
  '[Employee/API] Delete Employee',
  props<{ employeeCode: string }>(),
);
export const removeEmployee = createAction(
  '[Employee/API] Remove Employee',
  props<{ update: Update<Employee> }>(),
);
