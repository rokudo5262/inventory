import { createSelector } from '@ngrx/store';
import { goodsgroupAdapter } from '../states';
import { selectGoodsGroupState } from './features.selectors';
import { GoodsGroupReducer } from '../reducers';

export const selectGoodsGroupEntitiesState = createSelector(
    selectGoodsGroupState,
    state => state[GoodsGroupReducer.goodsgroupFeatureKey],
);
export const {
    selectIds: selectGoodsGroupIds,
    selectEntities: selectGoodsGroupEnities,
    selectAll: selectAllGoodsGroup,
    selectTotal: selectTotalGoodsGroup,
} = goodsgroupAdapter.getSelectors(selectGoodsGroupEntitiesState);

export const GoodsGroupSelectors = {
    selectGoodsGroupEntitiesState,
    selectGoodsGroupIds,
    selectGoodsGroupEnities,
    selectAllGoodsGroup,
    selectTotalGoodsGroup,
};
export const selectCurrentGoodsGroup = (id) => createSelector(
    selectGoodsGroupEnities,
    (goodsgroups) => goodsgroups[id],
);
