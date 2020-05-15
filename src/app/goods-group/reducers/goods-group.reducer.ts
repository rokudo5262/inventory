import { goodsgroupInitialState, goodsgroupAdapter } from '../states';
import { createReducer, on } from '@ngrx/store';
import {
    GoodsGroupApiActions,
    GoodsGroupActions,
} from '../actions';

export const goodsgroupFeatureKey = 'goods-group';

export const reducer = createReducer(
    goodsgroupInitialState,
    on(
        GoodsGroupActions.getGoodsGroups,
        GoodsGroupApiActions.loadGoodsGroupSuccess,
        (state, { goodsgroups }) => goodsgroupAdapter.addMany(goodsgroups, state)
    ),
    on(GoodsGroupActions.addGoodsGroup,
        GoodsGroupApiActions.addgoodsgroupSuccess,
        (state, { addgoodsgroup }) => goodsgroupAdapter.addOne(addgoodsgroup, state)
    ),
    on(
        GoodsGroupActions.updateGoodsGroup,
        GoodsGroupApiActions.updateGoodsGroupSuccess,
        (state, { update }) => goodsgroupAdapter.updateOne(update, state)
    ),
    on(
        GoodsGroupActions.removeGoodsGroup,
        GoodsGroupApiActions.removeGoodsGroupSuccess,
        (state, { id }) => goodsgroupAdapter.removeOne(id, state)
    )
);
