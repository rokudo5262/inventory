import { goodsgroupInitialState, goodsgroupAdapter } from '../states';
import { createReducer, on } from '@ngrx/store';
import {
    AddGoodsGroupActions,
    GoodsGroupApiActions,
    GoodsGroupCollectionApiActions
} from '../actions';

export const goodsgroupFeatureKey = 'goods-group';

export const reducer = createReducer(
    goodsgroupInitialState,
    on(
        GoodsGroupApiActions.getGoodsGroups,
        GoodsGroupCollectionApiActions.loadGoodsGroupSuccess,
        (state, { goodsgroups }) => goodsgroupAdapter.addMany(goodsgroups, state)
    ),
    on(AddGoodsGroupActions.addGoodsGroup,
        AddGoodsGroupActions.addgoodsgroupSuccess,
        (state, { addgoodsgroup }) => goodsgroupAdapter.addOne(addgoodsgroup, state)
    ),
    on(
        GoodsGroupApiActions.updateGoodsGroup,
        GoodsGroupCollectionApiActions.updateGoodsGroupSuccess,
        (state, { update }) => goodsgroupAdapter.updateOne(update, state)
    ),
    on(
        GoodsGroupApiActions.removeGoodsGroup,
        GoodsGroupCollectionApiActions.removeGoodsGroupSuccess,
        (state, { id }) => goodsgroupAdapter.removeOne(id, state)
    )
);
