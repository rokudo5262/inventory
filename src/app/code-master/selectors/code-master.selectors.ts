import { createSelector } from '@ngrx/store';
import { selectCodeMastersState } from './features.selectors';
import { CodeMasterReducer } from '../reducers';
import { codeMasterAdapter } from '../states';

export const selectCodeMasterEntitiesState = createSelector(
    selectCodeMastersState,
    state => state[CodeMasterReducer.codeMatersFeatureKey],
);

export const {
    selectIds: selectCodeMasterIds,
    selectEntities: selectCodeMasterEntities,
    selectAll: selectAllCodeMasters,
    selectTotal: selectTotalCodeMasters,
} = codeMasterAdapter.getSelectors(selectCodeMasterEntitiesState);

export const selectCurrentCodeMaster = (id) => createSelector(
    selectCodeMasterEntities,
    (codeMasters) => codeMasters[id],
);
export const CodeMasterSelectors = {
    selectCodeMasterEntitiesState,
    selectCodeMasterIds,
    selectCodeMasterEntities,
    selectAllCodeMasters,
    selectTotalCodeMasters,
    selectCurrentCodeMaster,
};
