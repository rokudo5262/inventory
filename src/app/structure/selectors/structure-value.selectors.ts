import { createSelector } from '@ngrx/store';
import { selectStructuresState } from './structure-features.selectors';
import { structurevalueAdapter } from '../states';
import { StructureValueReducer } from '../reducers';

export const selectStructureValueEntitiesState = createSelector(
  selectStructuresState,
  state => state[StructureValueReducer.structurevaluesFeatureKey],
);
export const {
  selectIds: selectStructureValueIds,
  selectEntities: selectStructureValueEntities,
  selectAll: selectAllStructureValues,
  selectTotal: selectTotalStructureValues,
} = structurevalueAdapter.getSelectors(selectStructureValueEntitiesState);
export const selectCurrentStructureValue = (id) => createSelector(
  selectStructureValueEntities,
  (structurevalues) => structurevalues[id],
);
export const StructureSelectors = {
  selectStructureValueEntitiesState,
  selectStructureValueIds,
  selectStructureValueEntities,
  selectAllStructureValues,
  selectTotalStructureValues,
  selectCurrentStructureValue,
};
