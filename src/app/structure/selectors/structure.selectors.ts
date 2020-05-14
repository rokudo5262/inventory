import { createSelector } from '@ngrx/store';
import { selectStructuresState } from './structure-features.selectors';
import { structureAdapter } from '../states';
import { StructureReducer } from '../reducers';

export const selectStructureEntitiesState = createSelector(
  selectStructuresState,
  state => state[StructureReducer.structuresFeatureKey],
);
export const {
  selectIds: selectStructureIds,
  selectEntities: selectStructureEntities,
  selectAll: selectAllStructures,
  selectTotal: selectTotalStructures,
} = structureAdapter.getSelectors(selectStructureEntitiesState);
export const selectCurrentStructure = (id) => createSelector(
  selectStructureEntities,
  (structures) => structures[id],
);
export const StructureSelectors = {
  selectStructureEntitiesState,
  selectStructureIds,
  selectStructureEntities,
  selectAllStructures,
  selectTotalStructures,
  selectCurrentStructure,
};
