import { createAction, props } from '@ngrx/store';
import { GoodsGroup } from '@appdata';
import { Update } from '@ngrx/entity';

export const searchgoodsgroupSuccess = createAction(
    '[GoodsGroup/API] Search Success',
    props<{ goodsgroups: GoodsGroup[] }>(),
);

export const searchgoodsgroupFailure = createAction(
    '[GoodsGroup/API] Search Failure',
    props<{ errorMsg: string }>(),
);

export const getGoodsGroups = createAction(
    '[GoodsGroups/API] Get Goods Groups',
    props<{ goodsgroups: GoodsGroup[]}>(),
);

export const updateGoodsGroup = createAction(
    '[GoodsGroup/API] Update Goods Group',
    props<{ update: Update<GoodsGroup>}>(),
);

export const removeGoodsGroup = createAction(
    '[GoodsGroup/API] Delete Goods Group',
    props<{ id: number }>(),
);
