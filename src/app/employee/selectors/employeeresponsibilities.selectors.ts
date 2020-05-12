import { createSelector } from '@ngrx/store';
import { selectEmployeeResponsibilitiesState } from './features.selectors';
import { EmployeeResponsibilityReducer } from '../reducers';
import { employeeresponsibilityAdapter } from '../states';


export const selectEmployeeResponsibilityEntitiesState = createSelector(
  selectEmployeeResponsibilitiesState,
  state => state[EmployeeResponsibilityReducer.employeeresponsibilitiesFeatureKey],
);

export const {
  selectIds: selectEmployeeResponsibilityIds,
  selectEntities: selectEmployeeResponsibilityEntities,
  selectAll: selectAllEmployeeResponsibilities,
  selectTotal: selectTotalEmployeeResponsibilities,
} = employeeresponsibilityAdapter.getSelectors(selectEmployeeResponsibilityEntitiesState);

export const EmployeeResponsibilitySelectors = {
  selectEmployeeResponsibilityEntitiesState,
  selectEmployeeResponsibilityIds,
  selectEmployeeResponsibilityEntities,
  selectAllEmployeeResponsibilities,
  selectTotalEmployeeResponsibilities,
};
export const selectCurrentEmployeeResponsibility = (lineId) => createSelector(
  selectEmployeeResponsibilityEntities,
  (employeeresponsibility) => employeeresponsibility[lineId]
);
