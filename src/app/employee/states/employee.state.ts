import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { Employee } from '@app/@core/data';

export interface EmployeeState extends EntityState<Employee> {
  selectedEmployeeCode: number | string | null;
}
export const employeeAdapter: EntityAdapter<Employee> = createEntityAdapter<Employee>({
  selectId: (employee: Employee) => employee.employeeCode,
  sortComparer: null,
});

export const employeeInitialState: EmployeeState = employeeAdapter.getInitialState({
  selectedEmployeeCode: null,
  entities: {
    0: {},
  },
});
