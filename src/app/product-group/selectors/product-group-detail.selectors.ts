import { createSelector } from '@ngrx/store';
import { ProductGroupDetailAdapter } from '../states';
import { ProductGroupDetailReducer } from '../reducers';
import { selectProductGroupState } from './features.selectors';

export const selectProductGroupDetailEntitiesState = createSelector(
    selectProductGroupState,
    state => state[ProductGroupDetailReducer.ProductGroupDetailFeatureKey],
);
export const {
    selectIds: selectProductGroupDetailIds,
    selectEntities: selectProductGroupDetailEntities,
    selectAll: selectAllProductGroupDetails,
    selectTotal: selectTotalProductGroupDetails,
} = ProductGroupDetailAdapter.getSelectors(selectProductGroupDetailEntitiesState);
export const ProductGroupDetailSelectors = {
    selectProductGroupDetailEntitiesState,
    selectProductGroupDetailIds,
    selectProductGroupDetailEntities,
    selectAllProductGroupDetails,
    selectTotalProductGroupDetails,
};
export const selectCurrentProductGroupDetail = (id) => createSelector(
    selectProductGroupDetailEntities,
    (productGroupDetails) => productGroupDetails[id],
);
