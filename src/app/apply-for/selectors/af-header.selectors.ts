import { createSelector } from '@ngrx/store';
import { selectApplyForHeadersState } from './features.selectors';
import { ApplyForHeaderReducer } from '../reducers';
import { applyForHeaderAdapter } from '../states/af-header.state';

export const selectApplyForHeaderEntitiesState = createSelector(
    selectApplyForHeadersState,
    state => state[ApplyForHeaderReducer.applyForHeadersFeatureKey]
);

export const {
    selectIds: selectApplyForHeaderIds,
    selectEntities: selectApplyForHeaderEntities,
    selectAll: selectAllApplyForHeaders,
    selectTotal: selectTotalApplyForHeaders,
} = applyForHeaderAdapter.getSelectors(selectApplyForHeaderEntitiesState);

export const selectCurrentApplyForHeader = (id) => createSelector(
    selectApplyForHeaderEntities,
    (applyForHeaders) => applyForHeaders[id],
);

export const ApplyForHeaderSelectors = {
    selectApplyForHeaderEntitiesState,
    selectApplyForHeaderIds,
    selectApplyForHeaderEntities,
    selectAllApplyForHeaders,
    selectTotalApplyForHeaders,
    selectCurrentApplyForHeader,
};
