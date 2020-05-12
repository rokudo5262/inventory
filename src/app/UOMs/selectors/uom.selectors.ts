import { createSelector } from '@ngrx/store';
import { UomReducer } from '../reducers';
import { uomAdapter } from '../states';
import { selectUomsState } from './features.selectors';

export const selectUomEntitiesState = createSelector(
    selectUomsState,
    state => state[UomReducer.uomsFeatureKey],
);

export const {
    selectIds: selectUomIds,
    selectEntities: selectUomEntities,
    selectAll: selectAllUoms,
    selectTotal: selectTotalUoms
} = uomAdapter.getSelectors(selectUomEntitiesState);

export const selectCurrentUom = (id) => createSelector(
    selectUomEntities,
    (uoms) => uoms[id],
);

export const UomSelectors = {
    selectUomEntitiesState,
    selectUomIds,
    selectUomEntities,
    selectAllUoms,
    selectTotalUoms,
    selectCurrentUom,
};
