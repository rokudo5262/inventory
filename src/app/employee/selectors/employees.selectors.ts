import { createSelector } from '@ngrx/store';
import { employeeAdapter } from '../states';
import { selectEmployeesState } from './features.selectors';
import { EmployeeReducer } from '../reducers';


export const selectEmployeeEntitiesState = createSelector(
  selectEmployeesState,
  state => state[EmployeeReducer.employeesFeatureKey],
);

export const {
  selectIds: selectEmployeeIds,
  selectEntities: selectEmployeeEntities,
  selectAll: selectAllEmployees,
  selectTotal: selectTotalEmployees,
} = employeeAdapter.getSelectors(selectEmployeeEntitiesState);

export const EmployeeSelectors = {
  selectEmployeeEntitiesState,
  selectEmployeeIds,
  selectEmployeeEntities,
  selectAllEmployees,
  selectTotalEmployees,
};
export const selectCurrentEmployee = (employeeCode) => createSelector(
  selectEmployeeEntities,
  (employee) => employee[employeeCode]
);
