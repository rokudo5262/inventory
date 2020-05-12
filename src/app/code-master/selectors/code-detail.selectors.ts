import { createSelector } from '@ngrx/store';
import { selectCodeMastersState } from './features.selectors';
import { CodeDetailReducer } from '../reducers';
import { codeDetailAdapter } from '../states';

export const selectCodeDetailEntitiesState = createSelector(
    selectCodeMastersState,
    state => state[CodeDetailReducer.codeDetailsFeatureKey],
);

export const {
    selectIds: selectCodeDetailIds,
    selectEntities: selectCodeDetailEntities,
    selectAll: selectAllCodeDetails,
    selectTotal: selectTotalCodeDetails,
} = codeDetailAdapter.getSelectors(selectCodeDetailEntitiesState);

export const CodeDetailSelectors = {
    selectCodeDetailEntitiesState,
    selectCodeDetailIds,
    selectCodeDetailEntities,
    selectAllCodeDetails,
    selectTotalCodeDetails,
};

export const selectCurrentCodeDetail = (id) => createSelector(
    selectCodeDetailEntities,
    (codeDetails) => codeDetails[id],
);
