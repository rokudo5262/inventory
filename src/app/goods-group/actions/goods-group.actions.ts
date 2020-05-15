import { createAction, props } from '@ngrx/store';
import { GoodsGroup } from '@app/@core/data';
import { Update } from '@ngrx/entity';

export const addGoodsGroup = createAction(
    '[GoodsGroup/API] Add Goods Groups',
    props<{ addgoodsgroup: GoodsGroup }>(),
);
export const getGoodsGroups = createAction(
    '[GoodsGroups/API] Get Goods Groups',
    props<{ goodsgroups: GoodsGroup[] }>(),
);

export const updateGoodsGroup = createAction(
    '[GoodsGroup/API] Update Goods Group',
    props<{ update: Update<GoodsGroup> }>(),
);

export const removeGoodsGroup = createAction(
    '[GoodsGroup/API] Delete Goods Group',
    props<{ id: number }>(),
);
