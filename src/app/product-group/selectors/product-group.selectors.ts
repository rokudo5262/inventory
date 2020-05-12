import { createSelector } from '@ngrx/store';
import { ProductGroupAdapter } from '../states';
import { selectProductGroupState } from './features.selectors';
import { ProductGroupReducer } from '../reducers';

export const selectProductGroupEntitiesState = createSelector(
    selectProductGroupState,
    state => state[ProductGroupReducer.ProductGroupFeatureKey],
);
export const {
    selectIds: selectProductGroupIds,
    selectEntities: selectProductGroupEnities,
    selectAll: selectAllProductGroup,
    selectTotal: selectTotalProductGroup,
} = ProductGroupAdapter.getSelectors(selectProductGroupEntitiesState);
export const ProductGroupSelectors = {
    selectProductGroupEntitiesState,
    selectProductGroupIds,
    selectProductGroupEnities,
    selectAllProductGroup,
    selectTotalProductGroup,
};
export const selectCurrentProductGroup = (id) => createSelector(
    selectProductGroupEnities,
    (Productgroups) => Productgroups[id],
);
