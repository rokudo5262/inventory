import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { EmployeeResponsibility } from '@app/@core/data';

export interface EmployeeResponsibilityState extends EntityState<EmployeeResponsibility> {
  selectedEmployeeResponsibilityCode: number | string | null;
}
export const employeeresponsibilityAdapter:
  EntityAdapter<EmployeeResponsibility> = createEntityAdapter<EmployeeResponsibility>({
    selectId: (employeeresponsibility: EmployeeResponsibility) => employeeresponsibility.lineId,
    sortComparer: null,
  });
export const employeeresponsibilityInitialState:
  EmployeeResponsibilityState = employeeresponsibilityAdapter.getInitialState({
    selectedEmployeeResponsibilityCode: null,
    entities: {
      0: {},
    },
  });
